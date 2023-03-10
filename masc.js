      // Crear un objeto que contenga un arreglo de dueños de mascotas y otro arreglo de mascotas
      const veterinaria = {
        duenos: [
          { id: 1, nombre: 'Juan', correo: 'juan@gmail.com' },
          { id: 2, nombre: 'Maria', correo: 'maria@gmail.com' },
          { id: 3, nombre: 'Pedro', correo: 'pedro@gmail.com' }
        ],
        mascotas: [
          { id: 1, nombre: 'Firulais', peso: 10, edad: 3, id_dueno: 1 },
          { id: 2, nombre: 'Pelusa', peso: 5, edad: 2, id_dueno: 1 },
          { id: 3, nombre: 'Rocky', peso: 15, edad: 5, id_dueno: 2 },
          { id: 4, nombre: 'Toby', peso: 7, edad: 1, id_dueno: 2 },
          { id: 5, nombre: 'Luna', peso: 8, edad: 4, id_dueno: 2 },
          { id: 6, nombre: 'Buddy', peso: 12, edad: 6, id_dueno: 3 },
        ],
        historial_v: [
        { id: 1, id_vacunas: 1, id_mascota: 3, fecha: '15/02/2020' },
        { id: 2, id_vacunas: 2, id_mascota: 4, fecha: '15/02/2020' },
        { id: 3, id_vacunas: 1, id_mascota: 3, fecha: '15/02/2020' },
        { id: 4, id_vacunas: 3, id_mascota: 4, fecha: '15/02/2020' },
        { id: 5, id_vacunas: 2, id_mascota: 5, fecha: '15/02/2020' },
        { id: 6, id_vacunas: 4, id_mascota: 3, fecha: '15/02/2020' },
        { id: 7, id_vacunas: 2, id_mascota: 3, fecha: '15/02/2020' },
        ]
      };
      
      // Crear un objeto para almacenar la cantidad de mascotas por dueño
      const mascotasPorDueno = {};
      const historialDeVacunas = {};
      const mascotaSinVacuna = {};
      
      /////////////////////////////////////////////////////////////7 DUEÑO CON MAS MASCOTAS ////////////////////////////////////////
      // Iterar por cada mascota y agregarla al objeto de mascotasPorDueno
      for (let mascota of veterinaria.mascotas) {
        if (mascotasPorDueno[mascota.id_dueno]) {
          mascotasPorDueno[mascota.id_dueno]++;
        } else {
          mascotasPorDueno[mascota.id_dueno] = 1;
        }
      }
      
      // Encontrar el dueño con más mascotas
      let maxMascotas = 0;
      let idDuenoConMasMascotas;
      for (let dueno of veterinaria.duenos) {
        if (mascotasPorDueno[dueno.id] && mascotasPorDueno[dueno.id] > maxMascotas) {
          maxMascotas = mascotasPorDueno[dueno.id];
          idDuenoConMasMascotas = dueno.id;
        }
      }
      ///////////////////////////////////////////////////////////MASCOTA CON MAS VACUNAS ////////////////////////////////////////////////////////
      // Iterar por cada Vacuna y agregarla al objeto  de historialDeVacunas 
      var arraay  = [];
      var i=0;
      for (let historial of veterinaria.historial_v) {
       if (historialDeVacunas[historial.id_mascota]) {
          historialDeVacunas[historial.id_mascota]++;
        } else {
          historialDeVacunas[historial.id_mascota] = 1;
        }
      
        arraay[i]=historial.id_mascota;
        i++;
      }
      // Encontrar la mascota con más vacunas
      let maxVacunas = 0;
      let maxEdad = 0;
      let idMascotasConMasVacunas;
      for (let masco of veterinaria.mascotas) {
        if (historialDeVacunas[masco.id] && historialDeVacunas[masco.id] > maxVacunas) {
          maxVacunas = historialDeVacunas[masco.id];
          maxEdad = masco.edad;
          idMascotasConMasVacunas = masco.id;
        }
      }
      ////////////////////////////////////////////////// La edad de la mascota con mas vacunas ////////////////////////////
      /////////////////////////////////////////////////////////// Mascotas sin vacunas //////////////////////////////////////////////////////////
      var sinVacuna = [];
      i=0;
      var longitud= Object.keys(veterinaria.mascotas).length;
      for(var x=1;x <= longitud;x++){
        for(var y=0;y < arraay.length;y++){
          if(x==arraay[y]){
            x++;
            y=0;
          }
        }
        sinVacuna[i] = x;
        i++;
        y=0;
      }
      //////////////////////////////////////////////////////////// Imprimir el resultado////////////////////////////////////////////////
      
      console.log(`El dueño con más mascotas es el de ID ${idDuenoConMasMascotas} con ${maxMascotas} mascotas`);
      console.log(`La mascota con más vacunas es el de ID ${idMascotasConMasVacunas} con ${maxVacunas} vacunas`);
      console.log(`La edad de la mascota con más vacunas es: ${maxEdad} años`);
      for(i=0;i < sinVacuna.length;i++){
        console.log(`Sin vacuna : ${sinVacuna[i]}`)
      }