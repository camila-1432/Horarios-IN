const horarios = {
    "primero": {
        "1-1": [
            ["7:00 AM - 7:45 AM", "CIENCIA Y TECNOLOGÍA", "CIENCIA Y TECNOLOGÍA", "CIENCIA Y TECNOLOGÍA", "FRANCÉS", "MÓDULO"],
            ["7:45 AM - 8:30 AM", "CIENCIA Y TECNOLOGÍA", "CIENCIA Y TECNOLOGÍA", "CIENCIA Y TECNOLOGÍA", "FRANCÉS", "MÓDULO"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "MOD 1.5 ST", "MÓDULO", "EDUCACION FISICA", "MÓDULO", "CIUDADANIA Y VALORES"],
            ["9:30 AM - 10:15 AM", "MOD 1.5 ST", "MÓDULO", "EDUCACION FISICA", "MÓDULO", "CIUDADANIA Y VALORES"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "MÓDULO", "MÓDULO", "CIUDADANIA Y VALORES", "MÓDULO", "FRANCÉS"],
            ["11:15 PM - 12:00 PM", "MÓDULO", "MÓDULO", "CIUDADANIA Y VALORES", "MÓDULO", "FRANCÉS"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "PRECÁLCULO", "", "PRECÁLCULO", "INGLES"],
            ["1:45 PM - 2:30 PM", "", "PRECÁLCULO", "", "PRECÁLCULO", "INGLES"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "LENGUA Y LITERATURA", "PRECÁLCULO", "MOD 1.3 ST", ""],
            ["3:30 PM - 4:15 PM", "", "LENGUA Y LITERATURA", "PRECÁLCULO", "MOD 1.3 ST", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "LENGUA Y LITERATURA", "LENGUA Y LITERATURA", "INGLÉS", ""],
            ["5:15 PM - 6:00 PM", "", "", "LENGUA Y LITERATURA", "INGLÉS", ""],
        ],
        "1-2": [
            ["7:00 AM - 7:45 AM", "MÓDULO", "MÓDULO", "MÓDULO", "CIENCIA Y TECNOLOGÍA", "EDUCACIÓN FÍSICA"],
            ["7:45 AM - 8:30 AM", "MÓDULO", "MÓDULO", "MÓDULO", "CIENCIA Y TECNOLOGÍA", "EDUCACIÓN FÍSICA"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "MÓDULO", "CIUDADANIA Y VALORES", "MÓDULO", "CIUDADANIA Y VALORES", "MÓDULO"],
            ["9:30 AM - 10:15 AM", "MÓDULO", "CIUDADANIA Y VALORES", "MÓDULO", "CIUDADANIA Y VALORES", "MÓDULO"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "CIUDADANIA Y VALORES", "LENGUA Y LITERATURA", "MOD 1.5 ST", "CIUDADANIA Y VALORES", "CIENCIA Y TECNOLOGÍA"],
            ["11:15 PM - 12:00 PM", "CIUDADANIA Y VALORES", "LENGUA Y LITERATURA", "MOD 1.5 ST", "", "CIENCIA Y TECNOLOGÍA"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "LENGUA Y LITERATURA", "", "FRANCÉS", "INGLÉS", "PRECÁLCULO"],
            ["1:45 PM - 2:30 PM", "LENGUA Y LITERATURA", "", "FRANCÉS", "INGLÉS", "PRECÁLCULO"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "LENGUA Y LITERATURA", "", "FRANCÉS", "PRECÁLCULO", "MOD 1.3 ST"],
            ["3:30 PM - 4:15 PM", "", "", "", "PRECÁLCULO", "MOD 1.3 ST"],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "PRECÁLCULO", "", "", "", "INGLÉS"],
            ["5:15 PM - 6:00 PM", "PRECÁLCULO", "", "", "", "INGLÉS"],
        ],

        "1-3": [
            ["7:00 AM - 7:45 AM", "MOD 1.5 ST", "CIUDADANIA Y VALORES", "EDUCACIÓN FÍSICA", "CIUDADANIA Y VALORES", "LENGUA Y LITERATURA"],
            ["7:45 AM - 8:30 AM", "MOD 1.5 ST", "CIUDADANIA Y VALORES", "EDUCACIÓN FÍSICA", "CIUDADANIA Y VALORES", "LENGUA Y LITERATURA"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "FRANCÉS", "", "CIENCIA Y TECNOLOGÍA", "MOD 1.3 ST", "CIENCIA Y TECNOLOGÍA"],
            ["9:30 AM - 10:15 AM", "FRANCÉS", "LENGUA Y LITERATURA", "CIENCIA Y TECNOLOGÍA", "MOD 1.3 ST", "CIENCIA Y TECNOLOGÍA"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "FRANCÉS", "CIENCIA Y TECNOLOGÍA", "INGLÉS", "LENGUA Y LITERATURA", ""],
            ["11:15 PM - 12:00 PM", "", "CIENCIA Y TECNOLOGÍA", "INGLÉS", "LENGUA Y LITERATURA", "CIUDADANIA Y VALORES"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "MÓDULO", "PRECÁLCULO", "PRECÁLCULO", "", "MÓDULO"],
            ["1:45 PM - 2:30 PM", "MÓDULO", "PRECÁLCULO", "PRECÁLCULO", "", "MÓDULO"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "PRECÁLCULO", "", "MÓDULO", "INGLÉS", "MÓDULO"],
            ["3:30 PM - 4:15 PM", "PRECÁLCULO", "", "MÓDULO", "INGLÉS", "MÓDULO"],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "MÓDULO", "MÓDULO", "PRECÁLCULO"],
            ["5:15 PM - 6:00 PM", "", "", "MÓDULO", "MÓDULO", "PRECÁLCULO"],
        ],

        "1-4": [
            ["7:00 AM - 7:45 AM", "CIUDADANIA Y VALORES", "MOD 1.5 ST", "CIUDADANIA Y VALORES", "INGLÉS", "CIENCIA Y TECNOLOGÍA"],
            ["7:45 AM - 8:30 AM", "CIUDADANIA Y VALORES", "MOD 1.5 ST", "CIUDADANIA Y VALORES", "INGLÉS", "CIENCIA Y TECNOLOGÍA"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "CIENCIA Y TECNOLOGÍA", "", "CIUDADANIA Y VALORES", "EDUCACIÓN FÍSICA", "INGLÉS"],
            ["9:30 AM - 10:15 AM", "CIENCIA Y TECNOLOGÍA", "FRANCÉS", "CIUDADANIA Y VALORES", "EDUCACIÓN FÍSICA", "INGLÉS"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "LENGUA Y LITERATURA", "FRANCÉS", "LENGUA Y LITERATURA", "CIENCIA Y TECNOLOGÍA", ""],
            ["11:15 PM - 12:00 PM", "LENGUA Y LITERATURA", "FRANCÉS", "LENGUA Y LITERATURA", "CIENCIA Y TECNOLOGÍA", ""],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "PRECÁLCULO", "MÓDULO", "", "MÓDULO", "PRECÁLCULO"],
            ["1:45 PM - 2:30 PM", "PRECÁLCULO", "MÓDULO", "", "MÓDULO", "PRECÁLCULO"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "MÓDULO", "MÓDULO", "", "MÓDULO", ""],
            ["3:30 PM - 4:15 PM", "MÓDULO", "MÓDULO", "", "MÓDULO", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "PRECÁLCULO", "", "MOD 1.3 ST", "MÓDULO"],
            ["5:15 PM - 6:00 PM", "", "PRECÁLCULO", "", "MOD 1.3 ST", "MÓDULO"],
        ],

        "1-5": [
            ["7:00 AM - 7:45 AM", "LENGUA Y LITERATURA", "INGLÉS", "CIENCIA Y TECNOLOGÍA", "MOD 1.5 ST", "PRECÁLCULO"],
            ["7:45 AM - 8:30 AM", "LENGUA Y LITERATURA", "INGLÉS", "CIENCIA Y TECNOLOGÍA", "MOD 1.5 ST", "PRECÁLCULO"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "CIUDADANIA Y VALORES", "LENGUA Y LITERATURA", "PRECÁLCULO", "LENGUA Y LITERATURA", "CIENCIA Y TECNOLOGÍA"],
            ["9:30 AM - 10:15 AM", "CIUDADANIA Y VALORES", "LENGUA Y LITERATURA", "PRECÁLCULO", "LENGUA Y LITERATURA", "CIENCIA Y TECNOLOGÍA"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "PRECÁLCULO", "CIUDADANIA Y VALORES", "INGLÉS", "CIENCIA Y TECNOLOGÍA", "EDUCACIÓN FÍSICA"],
            ["11:15 PM - 12:00 PM", "PRECÁLCULO", "CIUDADANIA Y VALORES", "INGLÉS", "CIENCIA Y TECNOLOGÍA", "EDUCACIÓN FÍSICA"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "MÓDULO", "", "MÓDULO", "FRANCÉS", "MÓDULO"],
            ["1:45 PM - 2:30 PM", "MÓDULO", "", "MÓDULO", "FRANCÉS", "MÓDULO"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "MÓDULO", "FRANCÉS", "MÓDULO"],
            ["3:30 PM - 4:15 PM", "", "", "MÓDULO", "", "MÓDULO"],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "MÓDULO", "", "MOD 1.3 ST"],
            ["5:15 PM - 6:00 PM", "", "", "MÓDULO", "", "MOD 1.3 ST"],
        ],

        "1-6": [ 
            ["7:00 AM - 7:45 AM", "PRECALCULO", "PRECALCULO", "MODULO 1.5 ST", "LENGUA Y LITERATURA", "CIENCIA Y TECNOLOGIA"],
            ["7:45 AM - 8:30 AM", "PRECALCULO", "PRECALCULO", "MODULO 1.5 ST", "LENGUA Y LITERATURA", "CIENCIA Y TECNOLOGIA"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "CIENCIA Y TECNOLOGIA", "INGLES", "LENGUA Y LITERATURA", "PRECALCULO", "LENGUA Y LITERATURA"],
            ["9:30 AM - 10:15 AM", "CIENCIA Y TECNOLOGIA", "INGLES", "CIUDADANIA Y VALORES", "PRECALCULO", "LENGUA Y LITERATURA"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "CIUDADANIA Y VALORES", "CIUDADANIA Y VALORES", "CIENCIA Y TECNOLOGIA", "EDUCACION FISICA", "INGLES"],
            ["11:15 PM - 12:00 PM", "CIUDADANIA Y VALORES", "CIUDADANIA Y VALORES", "CIENCIA Y TECNOLOGIA", "EDUCACION FISICA", "INGLES"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "MODULO", "MODULO", "", "MODULO", ""],
            ["1:45 PM - 2:30 PM", "MODULO", "MODULO", "", "MODULO", "FRANCES"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "MODULO", "MODULO", "", "MODULO", "FRANCES"],
            ["3:30 PM - 4:15 PM", "MODULO", "MODULO", "", "MODULO", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "MODULO", "MODULO 1.3 ST", "", "", ""],
            ["5:15 PM - 6:00 PM", "MODULO", "MODULO 1.3 ST", "", "", ""],
        ],
    },

    "segundo": {
      "2-1": [
            ["7:00 AM - 7:45 AM", "IDIOMA EXTRANJERO", "ESTUDIOS SOCIALES Y CÍVICA", "", "MOD 2.8 ST", "MOD 2.3 ST"],
            ["7:45 AM - 8:30 AM", "IDIOMA EXTRANJERO", "ESTUDIOS SOCIALES Y CÍVICA", "", "MOD 2.8 ST", "MOD 2.3 ST"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "MOD 2.1 ST", "ESTUDIOS SOCIALES Y CÍVICA", "", "ORIENTACIÓN PARA LA VIDA", "MOD 2.3 ST"],
            ["9:30 AM - 10:15 AM", "MOD 2.1 ST", "ESTUDIOS SOCIALES Y CÍVICA", "", "ORIENTACIÓN PARA LA VIDA", "MOD 2.2 ST"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 AM", "MOD 2.2 ST", "IDIOMA EXTRANJERO", "", "IDIOMA EXTRANJERO", "EDUCACIÓN FÍSICA"],
            ["11:15 AM - 12:00 PM", "MOD 2.2 ST", "IDIOMA EXTRANJERO", "", "IDIOMA EXTRANJERO", "EDUCACIÓN FÍSICA"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "LENGUAJE Y LITERATURA", "MOD 2.7 ST", "LENGUAJE Y LITERATURA", "MATEMÁTICA", "CIENCIAS NATURALES"],
            ["1:45 PM - 2:30 PM", "LENGUAJE Y LITERATURA", "MOD 2.7 ST", "LENGUAJE Y LITERATURA", "MATEMÁTICA", "CIENCIAS NATURALES"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "MATEMÁTICA", "MOD 2.4 ST", "LENGUAJE Y LITERATURA", "MOD 2.5 ST", ""],
            ["3:30 PM - 4:15 PM", "MATEMÁTICA", "MOD 2.4 ST", "", "MOD 2.5 ST", "FRANCÉS"],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "MOD 2.6 ST", "MATEMÁTICA", "CIENCIAS NATURALES", "CIENCIAS NATURALES", "FRANCÉS"],
            ["5:15 PM - 6:00 PM", "MOD 2.6 ST", "MATEMÁTICA", "CIENCIAS NATURALES", "CIENCIAS NATURALES", "FRANCÉS"],
        ],

        "2-2": [
            ["7:00 AM - 7:45 AM", "MOD 2.1 ST", "MOD 2.2 ST", "MOD 2.4 ST", "MOD 2.6 ST", "EDUCACIÓN FÍSICA"],
            ["7:45 AM - 8:30 AM", "MOD 2.1 ST", "MOD 2.2 ST", "MOD 2.4 ST", "MOD 2.6 ST", "EDUCACIÓN FÍSICA"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "ORIENTACIÓN PARA LA VIDA", "MOD 2.2 ST", "MOD 2.5 ST", "IDIOMA EXTRANJERO", "ESTUDIOS SOCIALES Y CÍVICA"],
            ["9:30 AM - 10:15 AM", "ORIENTACIÓN PARA LA VIDA", "ESTUDIOS SOCIALES Y CÍVICA", "MOD 2.5 ST", "IDIOMA EXTRANJERO", "ESTUDIOS SOCIALES Y CÍVICA"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 AM", "MOD 2.3 ST", "ESTUDIOS SOCIALES Y CÍVICA", "IDIOMA EXTRANJERO", "IDIOMA EXTRANJERO", "MOD 2.8 ST"],
            ["11:15 AM - 12:00 PM", "", "ESTUDIOS SOCIALES Y CÍVICA", "IDIOMA EXTRANJERO", "", "MOD 2.8 ST"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "FRANCÉS", "MATEMÁTICA", "CIENCIAS NATURALES", "MOD 2.3 ST", "MOD 2.7 ST"],
            ["1:45 PM - 2:30 PM", "FRANCÉS", "MATEMÁTICA", "CIENCIAS NATURALES", "MOD 2.3 ST", "MOD 2.7 ST"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "FRANCÉS", "CIENCIAS NATURALES", "MATEMÁTICA", "CIENCIAS NATURALES", "LENGUAJE Y LITERATURA"],
            ["3:30 PM - 4:15 PM", "LENGUAJE Y LITERATURA", "CIENCIAS NATURALES", "MATEMÁTICA", "CIENCIAS NATURALES", "LENGUAJE Y LITERATURA"],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "LENGUAJE Y LITERATURA", "", "", "", "MATEMÁTICA"],
            ["5:15 PM - 6:00 PM", "LENGUAJE Y LITERATURA", "", "", "", "MATEMÁTICA"],
        ],


        "2-3": [
            ["7:00 AM - 7:45 AM", "MOD 2.4 ST", "IDIOMA EXTRANJERO", "EDUCACIÓN FÍSICA", "MOD 2.3 ST", "ESTUDIOS SOCIALES Y CÍVICA"],
            ["7:45 AM - 8:30 AM", "MOD 2.4 ST", "IDIOMA EXTRANJERO", "EDUCACIÓN FÍSICA", "ESTUDIOS SOCIALES Y CÍVICA", "ESTUDIOS SOCIALES Y CÍVICA"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "MOD 2.5 ST", "IDIOMA EXTRANJERO", "MOD 2.1 ST", "ESTUDIOS SOCIALES Y CÍVICA", "IDIOMA EXTRANJERO"],
            ["9:30 AM - 10:15 AM", "MOD 2.5 ST", "IDIOMA EXTRANJERO", "MOD 2.1 ST", "ESTUDIOS SOCIALES Y CÍVICA", "IDIOMA EXTRANJERO"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "MOD 2.6 ST", "MOD 2.2 ST", "MOD 2.7 ST", "ORIENTACIÓN PARA LA VIDA", "MOD 2.3 ST"],
            ["11:15 PM - 12:00 PM", "MOD 2.6 ST", "MOD 2.2 ST", "MOD 2.7 ST", "ORIENTACIÓN PARA LA VIDA", "MOD 2.3 ST"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "CIENCIAS NATURALES", "LENGUAJE Y LITERATURA", "MOD 2.8 ST", "CIENCIAS NATURALES", "LENGUAJE Y LITERATURA"],
            ["1:45 PM - 2:30 PM", "CIENCIAS NATURALES", "LENGUAJE Y LITERATURA", "MOD 2.8 ST", "CIENCIAS NATURALES", "LENGUAJE Y LITERATURA"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "LENGUAJE Y LITERATURA", "CIENCIAS NATURALES", "MATEMÁTICA", "MATEMÁTICA"],
            ["3:30 PM - 4:15 PM", "", "FRANCÉS", "CIENCIAS NATURALES", "MATEMÁTICA", "MATEMÁTICA"],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "FRANCÉS", "MATEMÁTICA", "", ""],
            ["5:15 PM - 6:00 PM", "", "FRANCÉS", "MATEMÁTICA", "", ""],
        ],

        "2-4": [
            ["7:00 AM - 7:45 AM", "ESTUDIOS SOCIALES Y CÍVICA", "MOD 2.7 ST", "MOD 2.1 ST", "IDIOMA EXTRANJERO", "MOD 2.2 ST"],
            ["7:45 AM - 8:30 AM", "ESTUDIOS SOCIALES Y CÍVICA", "MOD 2.7 ST", "MOD 2.1 ST", "IDIOMA EXTRANJERO", "MOD 2.2 ST"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "ESTUDIOS SOCIALES Y CÍVICA", "ORIENTACIÓN PARA LA VIDA", "MOD 2.1 ST", "MOD 2.4 ST", "MOD 2.2 ST"],
            ["9:30 AM - 10:15 AM", "IDIOMA EXTRANJERO", "ORIENTACIÓN PARA LA VIDA", "ESTUDIOS SOCIALES Y CÍVICA", "MOD 2.4 ST", "MOD 2.3 ST"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 AM", "IDIOMA EXTRANJERO", "MOD 2.6 ST", "EDUCACIÓN FÍSICA", "MOD 2.5 ST", "MOD 2.3 ST"],
            ["11:15 AM - 12:00 PM", "IDIOMA EXTRANJERO", "MOD 2.6 ST", "EDUCACIÓN FÍSICA", "MOD 2.5 ST", "MOD 2.3 ST"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "MATEMÁTICA", "CIENCIAS NATURALES", "LENGUAJE Y LITERATURA", "MATEMÁTICA", "MATEMÁTICA"],
            ["1:45 PM - 2:30 PM", "MATEMÁTICA", "CIENCIAS NATURALES", "LENGUAJE Y LITERATURA", "MATEMÁTICA", "MATEMÁTICA"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "CIENCIAS NATURALES", "MATEMÁTICA", "", "LENGUAJE Y LITERATURA", "MOD 2.8 ST"],
            ["3:30 PM - 4:15 PM", "CIENCIAS NATURALES", "MATEMÁTICA", "", "FRANCÉS", "MOD 2.8 ST"],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "LENGUAJE Y LITERATURA", "", "FRANCÉS", "CIENCIAS NATURALES"],
            ["5:15 PM - 6:00 PM", "", "LENGUAJE Y LITERATURA", "", "FRANCÉS", "CIENCIAS NATURALES"],
        ],
        
        "2-5": [
            ["7:00 AM - 7:45 AM", "CIENCIAS NATURALES", "CIENCIAS NATURALES", "ESTUDIOS SOCIALES Y CÍVICA", "MOD 2.3 ST", "IDIOMA EXTRANJERO"],
            ["7:45 AM - 8:30 AM", "CIENCIAS NATURALES", "CIENCIAS NATURALES", "ESTUDIOS SOCIALES Y CÍVICA", "MOD 2.1 ST", "IDIOMA EXTRANJERO"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "ESTUDIOS SOCIALES Y CÍVICA", "ORIENTACIÓN PARA LA VIDA", "MOD 2.1 ST", "MOD 2.4 ST", "MOD 2.2 ST"],
            ["9:30 AM - 10:15 AM", "IDIOMA EXTRANJERO", "ORIENTACIÓN PARA LA VIDA", "ESTUDIOS SOCIALES Y CÍVICA", "MOD 2.4 ST", "MOD 2.3 ST"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 AM", "ORIENTACIÓN PARA LA VIDA", "MOD 2.6 ST", "EDUCACIÓN FÍSICA", "CIENCIAS NATURALES", "ESTUDIOS SOCIALES Y CÍVICA"],
            ["11:15 AM - 12:00 PM", "ORIENTACIÓN PARA LA VIDA", "MOD 2.6 ST", "EDUCACIÓN FÍSICA", "CIENCIAS NATURALES", "ESTUDIOS SOCIALES Y CÍVICA"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "MOD 2.3 ST", "MOD 2.6 ST", "LENGUAJE Y LITERATURA", "MOD 2.8 ST"],
            ["1:45 PM - 2:30 PM", "", "MOD 2.3 ST", "MOD 2.6 ST", "LENGUAJE Y LITERATURA", "MOD 2.8 ST"],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "LENGUAJE Y LITERATURA", "MATEMÁTICA", "MATEMÁTICA", "MOD 2.7 ST"],
            ["3:30 PM - 4:15 PM", "", "LENGUAJE Y LITERATURA", "MATEMÁTICA", "MATEMÁTICA", "MOD 2.7 ST"],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "MATEMÁTICA", "LENGUAJE Y LITERATURA", "", "CIENCIAS NATURALES"],
            ["5:15 PM - 6:00 PM", "", "MATEMÁTICA", "LENGUAJE Y LITERATURA", "", "CIENCIAS NATURALES"],
        ],
    },

    "tercero": {
        "3-1": [
            ["7:00 AM - 7:45 AM", "MOD 3.7 ST", "MOD 3.8 ST", "MOD 3.4 ST", "MOD 3.4 ST", "MOD 3.1 ST"],
            ["7:45 AM - 8:30 AM", "MOD 3.7 ST", "MOD 3.8 ST", "MOD 3.4 ST", "MOD 3.4 ST", "MOD 3.1 ST"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "MOD 3.3 ST", "MOD 3.5 ST", "MOD 3.2 ST", "MOD 3.3 ST", "MOD 3.8 ST"],
            ["9:30 AM - 10:15 AM", "MOD 3.3 ST", "MOD 3.5 ST", "MOD 3.2 ST", "MOD 3.3 ST", "MOD 3.8 ST"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 AM", "MOD 3.1 ST", "MOD 3.5 ST", "MOD 3.6 ST", "MOD 3.1 ST", "MOD 3.2 ST"],
            ["11:15 AM - 12:00 PM", "MOD 3.1 ST", "MOD 3.3 ST", "MOD 3.6 ST", "MOD 3.1 ST", "MOD 3.2 ST"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
        "3-2": [
            ["7:00 AM - 7:45 AM", "MOD 3.3 ST", "MOD 3.5 ST ", "MOD 3.1 ST", "MOD 3.7 ST ", "MOD 3.4 ST"],
            ["7:45 AM - 8:30 AM", "MOD 3.3 ST", "MOD 3.5 ST", "MOD 3.1 ST", "MOD 3.7 ST", "MOD 3.4 ST"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "MOD 3.1 ST", "MOD 3.2 ST", "MOD 3.6 ST", "MOD 3.1 ST", "MOD 3.3 ST"],
            ["9:30 AM - 10:15 AM", "MOD 3.1 ST", "MOD 3.2 ST", "MOD 3.6 ST", "MOD 3.1 ST", "MOD 3.3 ST"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "MOD 3.8 ST", "MOD 3.8 ST", "MOD 3.4 ST", "MOD 3.2 ST", "MOD 3.5 ST"],
            ["11:15 PM - 12:00 PM", "MOD 3.8 ST", "MOD 3.8 ST", "MOD 3.4 ST", "MOD 3.2 ST", "MOD 3.5 ST"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],


        "3-3": [
            ["7:00 AM - 7:45 AM", "MOD 3.1 ST", "MOD 3.4 ST", "MOD 3.6 ST", "MOD 3.1 ST", "MOD 3.2 ST"],
            ["7:45 AM - 8:30 AM", "MOD 3.1 ST", "MOD 3.4 ST", "MOD 3.6 ST", "MOD 3.1 ST", "MOD 3.2 ST"],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "MOD 3.8 ST", "MOD 3.4 ST", "MOD 3.3 ST", "MOD 3.7 ST", "MOD 3.1 ST"],
            ["9:30 AM - 10:15 AM", "MOD 3.8 ST", "MOD 3.4 ST", "MOD 3.5 ST", "MOD 3.7 ST", "MOD 3.1 ST"],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 AM", "MOD 3.3 ST", "MOD 3.2 ST", "MOD 3.5 ST", "MOD 3.3 ST", "MOD 3.8 ST"],
            ["11:15 AM - 12:00 PM", "MOD 3.3 ST", "MOD 3.2 ST", "MOD 3.5 ST", "MOD 3.3 ST", "MOD 3.8 ST"],
            ["12:00 PM - 1:00 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
    },
};

let añoActual = "primero";
let seccionActual = "1-1";

document.addEventListener('DOMContentLoaded', () => {
    cargarHorario(añoActual, seccionActual);
    configurarBotones();
});

function configurarBotones() {
    const botonesAño = document.querySelectorAll('.btn-year');
    botonesAño.forEach(boton => {
        boton.addEventListener('click', function () {
            botonesAño.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            añoActual = this.getAttribute('data-year');

            document.querySelectorAll('.secciones').forEach(seccion => {
                seccion.style.display = 'none';
            });

            document.querySelector(`.secciones.${añoActual}`).style.display = 'flex';

            const primeraSeccion = document.querySelector(`.secciones.${añoActual} .btn-section`).getAttribute('data-section');
            seccionActual = primeraSeccion;

            document.querySelectorAll('.btn-section').forEach(boton => {
                boton.classList.remove('active');
            });
            document.querySelector(`.btn-section[data-section="${primeraSeccion}"]`).classList.add('active');

            cargarHorario(añoActual, seccionActual);
            actualizarTitulo();
        });
    });

    const botonesSeccion = document.querySelectorAll('.btn-section');
    botonesSeccion.forEach(boton => {
        boton.addEventListener('click', function () {
            botonesSeccion.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            seccionActual = this.getAttribute('data-section');
            cargarHorario(añoActual, seccionActual);
            actualizarTitulo();
        });
    });
}

function cargarHorario(año, seccion) {
    const tbody = document.querySelector('.tabla-horario tbody');
    tbody.innerHTML = '';

    const horarioSeccion = horarios[año][seccion];

    if (horarioSeccion && horarioSeccion.length > 0) {
        horarioSeccion.forEach(fila => {
            const tr = document.createElement('tr');

            fila.forEach(celda => {
                const td = document.createElement('td');
                td.textContent = celda;
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });
    } else {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 6;
        td.textContent = 'Horario no disponible para esta sección';
        td.style.textAlign = 'center';
        td.style.padding = '20px';
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
}

function actualizarTitulo() {
    const titulo = document.getElementById('titulo-seccion');
    const añoTexto = añoActual === 'primero'
        ? 'Primer Año'
        : añoActual === 'segundo'
            ? 'Segundo Año'
            : 'Tercer Año';

    titulo.textContent = `${añoTexto} - Sección ${seccionActual}`;
}
