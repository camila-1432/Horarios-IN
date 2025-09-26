const horarios = {
    "primero": {
        "1-1": [
            ["7:00 AM - 7:45 AM", "Hernandez Herrera Herbert de Jesus Modulo","Hernandez Herrera Herbert de Jesus Modulo", "", "Linares Murga, Ana Concepción Social Estudiantil", " "],
            ["7:45 AM - 8:30 AM", "Hernandez Herrera Herbert de Jesus Modulo", "Hernandez Herrera Herbert de Jesus Modulo", "", "Linares Murga, Ana Concepción Social Estudiantil", ""],
            ["8:30 AM - 8:45 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["8:45 AM - 9:30 AM", "Hernandez Herrera Herbert de Jesus Modulo", "Hernandez Herrera Herbert de Jesus Modulo", "", "Hernandez Herrera Herbert de Jesus Modulo", ""],
            ["9:30 AM - 10:15 AM", "Hernandez Herrera Herbert de Jesus Modulo ", "Hernandez Herrera Herbert de Jesus Modulo","", "Hernandez Herrera Herbert de Jesus Modulo", ""],
            ["10:15 AM - 10:30 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["10:30 AM - 11:15 AM", "Hernandez Herrera Herbert de Jesus Modulo", "Granados Blancos, Mario Douglas Educación Física", "", "Hernandez Herrera Herbert de Jesus Modulo", ""],
            ["11:15 AM - 12:00 PM", "Hernandez Herrera Herbert de Jesus Modulo", "Granados Blancos, Mario Douglas Educación Física", "", "Hernandez Herrera Herbert de Jesus Modulo", ""],
            ["12:00 PM - 1:00 PM", "Receso","Receso","Receso","Receso","Receso" ],
            ["1:00 PM - 1:45 PM",  "Rivera Cruz, Oscar Manuel Inglés","Zelada Monrenegro, René Precálculo","Erroa de Castilo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo","Reyes Carpio, Valeriano Ciudadania y Valores"],
            ["1:45 PM - 2:30 PM",  "Rivera Cruz, Oscar Manuel Inglés","Zelada Monrenegro, René Precálculo","Erroa de Castilo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo","Reyes Carpio, Valeriano Ciudadania y Valores"],
            ["2:30 PM - 2:45 PM",  "Receso", "Receso","Receso","Receso","Receso"],
            ["2:45 PM - 3:30 PM",  "Zelada Monrenegro, René Precálculo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Reyes Carpio, Valeriano Ciudadania y Valores"],
            ["3:30 PM - 4:15 PM",  "Zelada Monrenegro, René Precálculo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Erroa de Castillo, Hilda Siulan Lengua y Literatura"],
            ["4:15 PM - 4:30 PM",  "Receso","Rceso","Receso","Receso","Receso"],
            ["4:30 PM - 5:15 PM",  "","Rivera Cruz, Oscar Manuel Inglés","Rivera Cruz, Oscar Manuel Mod 1.6 APS","Reyes Carpio, Valeriano Ciudadania y Valores","Erroa de Castillo, Hilda Siulan Lengua y Literatura"],
            ["5:15 PM - 6:00 PM",  "","Rivera Cruz, Oscar Manuel Inglés","Rivera Cruz, Oscar Manuel Mod 1.6 APS","Reyes Carpio, Valeriano Ciudadania y Valores","Erroa de Castillo, Hilda Siulan Lengua y Literatura"],
        ],
        "1-2": [
            ["7:00 AM - 7:45 AM", "Gámez, Mayra Cristina Modulo", "", "Linares Murga, Ana Concepción Social Estudiantil", "Granados Blancos, Mario Douglas Educación Física", ""],
            ["7:45 AM - 8:30 AM", "Gámez, Mayra Cristina Modulo", "", "Linares Murga, Ana Concepción Social Estudiantil", "Granados Blancos, Mario Douglas Educación Física", ""],
            ["8:30 AM - 8:45 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["8:45 AM - 9:30 AM", "Gámez, Mayra Cristina Modulo", "", "Hernandez Herrera Herbert de Jesus Mod 1.6 APS", "Rivera Cruz, Oscar Manuel Inglés", ""],
            ["9:30 AM - 10:15 AM", "Gámez, Mayra Cristina Modulo ", "","Hernandez Herrera Herbert de Jesus Mod 1.6 APS", "Rivera Cruz, Oscar Manuel Inglés", ""],
            ["10:15 AM - 10:30 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["10:30 AM - 11:15 AM", "Rivera Cruz, Oscar Manuel Inglés", "", "", "Gámez, Mayra Cristina Modulo", ""],
            ["11:15 AM - 12:00 PM", "Rivera Cruz, Oscar Manuel Inglés", "", "", "Gámez, Mayra Cristina Modulo", ""],
            ["12:00 PM - 1:00 PM", "Receso","Receso","Receso","Receso","Receso" ],
            ["1:00 PM - 1:45 PM",  "Navas Peña, Jaime Antonio Ciencias y Tecnologia","Gámez, Mayra Cristina Modulo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Gámez, Mayra Cristina Modulo","Navas Peña, Jaime Antonio Ciencias y Tecnologia"],
            ["1:45 PM - 2:30 PM",  "Navas Peña, Jaime Antonio Ciencias y Tecnologia","Gámez, Mayra Cristina Modulo","Navas Peña, Jaime Antonio Ciencias y Tecnologia", "Gámez, Mayra Cristina Modulo","Navas Peña, Jaime Antonio Ciencias y Tecnologia"],
            ["2:30 PM - 2:45 PM",  "Receso", "Receso","Receso","Receso","Receso"],
            ["2:45 PM - 3:30 PM",  "Erroa de Castillo, Hilda Siulan Lengua y Literatura","Gámez, Mayra Cristina Modulo","Zelada Monrenegro, René Precálculo","Gámez, Mayra Cristina Modulo","Zelada Monrenegro, René Precálculo"],
            ["3:30 PM - 4:15 PM",  "Reyes Carpio, Valeriano Ciudadania y Valores","Gámez, Mayra Cristina Modulo","Zelada Monrenegro, René Precálculo","Gámez, Mayra Cristina Modulo","Zelada Monrenegro, René Precálculo"],
            ["4:15 PM - 4:30 PM",  "Receso","Rceso","Receso","Receso","Receso"],
            ["4:30 PM - 5:15 PM",  "Reyes Carpio, Valeriano Ciudadania y Valores","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo","Reyes Carpio, Valeriano Ciudadania y Valores"],
            ["5:15 PM - 6:00 PM",  "Reyes Carpio, Valeriano Ciudadania y Valores","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo","Reyes Carpio, Valeriano Ciudadania y Valores"],
        ],
        "1-3": [
            ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
        "1-4": [
           ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
        "1-5": [
            ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
        "1-6": [
            ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
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
    "segundo": {
        "2-1": [
            ["7:00 AM - 7:45 AM", "Martinez de Alvarenga, Clarina Angelica Orientacion Para La Vida", "Crespin Telles, Jose Adalberto Modulo", "Elias, Guillermo Lenguaje y Literatura", "", "Crespin Telles,Jose Adalberto Modulo"],
            ["7:45 AM - 8:30 AM", "Martinez de Alvarenga, Clarina Angelica Orientacion Para La Vida", "Crespin Telles, Jose Adalberto Modulo", "Elias, Guillermo Lenguaje y Literatura", "", "Crespin Telles,Jose Adalberto Modulo"],
            ["8:30 AM - 8:45 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["8:45 AM - 9:30 AM", "Cabezas Vasquez, Jose Mauricio Educacion Fisica", "Crespin Telles,Jose Adalberto Modulo", "Crespin Telles,Jose Adalberto Modulo", "Crespin Telles,Jose Adalberto Modulo", "Elias, Guillermo Lenguaje y Literatura"],
            ["9:30 AM - 10:15 AM", "Cabezas Vasquez, Jose Mauricio Educacion Fisica", "Crespin Telles,Jose Adalberto Modulo","Crespin Telles,Jose Adalberto Modulo", "Crespin Telles,Jose Adalberto Modulo", "Elias, Guillermo Lenguaje y Literatura"],
            ["10:15 AM - 10:30 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["10:30 AM - 11:15 AM", "Sorto de Alvarado, Leticia Ivette Matematica", "Aguilar Guardado, Maria Dolores Idioma extranjero", "Coreas, Miguel Angel Arturo Ciencias Naturales", "Soto Machuca, Luis Ernesto Estudios Sociales y Civica", "Soto Machuca, Luis Ernesto Estudios Sociales y Civica"],
            ["11:15 AM - 12:00 PM", "Sorto de Alvarado, Leticia Ivette Matematica", "Aguilar Guardado, Maria Dolores Idioma extranjero", "Coreas, Miguel Angel Arturo Ciencias Naturales", "Soto Machuca, Luis Ernesto Estudios Sociales y Civica", "Soto Machuca, Luis Ernesto Estudios Sociales y Civica"],
            ["12:00 PM - 1:00 PM", "Receso","Receso","Receso","Receso","Receso" ],
            ["1:00 PM - 1:45 PM",  "Coreas, Miguel Angel Arturo Ciencias Naturale","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Gámez, Mayra Cristina Modulo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Gámez, Mayra Cristina Modulo"],
            ["1:45 PM - 2:30 PM",  "Coreas, Miguel Angel Arturo Ciencias Naturale","Reyes Carpio, Valeriano Ciudadania y Valores","Gámez, Mayra Cristina Modulo", "Navas Peña, Jaime Antonio Ciencias y Tecnologia","Gámez, Mayra Cristina Modulo"],
            ["2:30 PM - 2:45 PM",  "Receso", "Receso","Receso","Receso","Receso"],
            ["2:45 PM - 3:30 PM",  "Navas Peña, Jaime Antonio Ciencias y Tecnologia","Reyes Carpio, Valeriano Ciudadania y Valores","Gámez, Mayra Cristina Modulo","Zelada Monrenegro, René Precálculo","Gámez, Mayra Cristina Modulo"],
            ["3:30 PM - 4:15 PM",  "Navas Peña, Jaime Antonio Ciencias y Tecnologia","Reyes Carpio, Valeriano Ciudadania y Valores","Zelada Monrenegro, René Precálculo","Zelada Monrenegro, René Precálculo","Gámez, Mayra Cristina Modulo"],
            ["4:15 PM - 4:30 PM",  "Receso","Rceso","Receso","Receso","Receso"],
            ["4:30 PM - 5:15 PM",  "Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo"],
            ["5:15 PM - 6:00 PM",  "Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo"],
        ],
        "2-2": [
            ["7:00 AM - 7:45 AM", "Crespín Terres, José Adalberto Modulo", "", "Crespín Terres, José Adalberto Modulo", "Martinez de Alarenga, Clarina Angelica Orientacion para la vida", "Elias, Guillermo Lenguaje y Literaura"],
            ["7:45 AM - 8:30 AM", "Crespín Terres, José Adalberto Modulo", "", "Crespín Terres, José Adalberto Modulo", "Martinez de Alarenga, Clarina Angelica Orientacion para la vida", "Elias, Guillermo Lenguaje y Literaura"],
            ["8:30 AM - 8:45 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["8:45 AM - 9:30 AM", "Crespín Terres, José Adalberto Modulo", "", "", "Crespin Telles, Jose Adalberto Modulo", "Crespin Telles, Jose Adalberto Modulo"],
            ["9:30 AM - 10:15 AM", "Crespín Terres, José Adalberto Modulo", "","Elias Guillermo, Lenguaje y Literatura", "Crespin Telles, Jose Adalberto Modul", "Crespin Telles, Jose Adalberto Modulo"],
            ["10:15 AM - 10:30 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["10:30 AM - 11:15 AM", "Cabezas Vasquez, Jose Mauricio Educacion Fisica", "", "Elias Guillermo, Lenguaje y Literatura", "Crespin Telles, Jose Adalberto Modulo", "Crespin Telles, Jose Adalberto Modulo"],
            ["11:15 AM - 12:00 PM", "Cabezas Vasquez, Jose Mauricio Educacion Fisica", "", "Elias Guillermo, Lenguaje y Literatura", "Crespin Telles, Jose Adalberto Modulo", "Crespin Telles, Jose Adalberto Modulo"],
            ["12:00 PM - 1:00 PM", "Receso","Receso","Receso","Receso","Receso" ],
            ["1:00 PM - 1:45 PM",  "Coreas, Miguel Angel Arturo Ciencias Naturales","Soto Machuca,Luis Ernesto Estudios, Sociales y Civica","Sorto de Alvarado, Leticia Ivette Matematica","Coreas, Miguel Angel Arturo Ciencias Naturales","Aguilar Guardado, Maria Dolores Idioma Extranjero"],
            ["1:45 PM - 2:30 PM",  "Coreas, Miguel Angel Arturo Ciencias Naturales","Soto Machuca,Luis Ernesto Estudios, Sociales y Civica","Sorto de Alvarado, Leticia Ivette Matematica", "Coreas, Miguel Angel Arturo Ciencias Naturales","Aguilar Guardado, Maria Dolores Idioma Extranjero"],
            ["2:30 PM - 2:45 PM",  "Receso", "Receso","Receso","Receso","Receso"],
            ["2:45 PM - 3:30 PM",  "Sorto de Alvarado, Leticia Ivette Matematica","Soto Machuca,Luis Ernesto Estudios, Sociales y Civica","Rivera Cruz, Oscar Manuel Mod 2.6 APS","Guardado ALberto de Melara, Sandra Arely Mod 2.7 APS","Soto Machuca,Luis Ernesto Estudios, Sociales y Civica"],
            ["3:30 PM - 4:15 PM",  "Sorto de Alvarado, Leticia Ivette Matematica","Aguilar Guardado, Maria Dolores Idioma Extranjero","Rivera Cruz, Oscar Manuel Mod 2.6 APS","Guardado ALberto de Melara, Sandra Arely Mod 2.7 APS","Soto Machuca,Luis Ernesto Estudios, Sociales y Civica"],
            ["4:15 PM - 4:30 PM",  "Receso","Rceso","Receso","Receso","Receso"],
            ["4:30 PM - 5:15 PM",  "","Aguilar Guardado, Maria Dolores Idioma Extranjero","Coreas, Miguel Angel Arturo Ciencias Naturales","","Sorto de Alvarado, Leticia Ivette Matematica"],
            ["5:15 PM - 6:00 PM",  "","Aguilar Guardado, Maria Dolores Idioma Extranjero","Coreas, Miguel Angel Arturo Ciencias Naturales","","Sorto de Alvarado, Leticia Ivette Matematica"],
        ],
        "2-3": [
            ["7:00 AM - 7:45 AM", "Granados Blanco, Mario Douglas Educación Física", "", "Hernandez Herrera Herbert de Jesus Mod 1.6 APS", "Gámez Mayra Cristina Modulo", ""],
            ["7:45 AM - 8:30 AM", "Granados Blanco, Mario Douglas", "", "Hernandez Herrera Herbert de Jesus Mod 1.6 APS", "Gámez Mayra Cristina Modulo", ""],
            ["8:30 AM - 8:45 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["8:45 AM - 9:30 AM", "Rivera Cruz, Oscar Manuel Inglés", "", "Rivera Cruz, Oscar Manuel Inglés", "Gámez Mayra Cristina Modulo", ""],
            ["9:30 AM - 10:15 AM", "Rivera Cruz, Oscar Manuel Inglés ", "","Rivera Cruz, Oscar Manuel Inglés", "Gámez Mayra Cristina Modulo", ""],
            ["10:15 AM - 10:30 AM", "Receso", "Receso", "Receso", "Receso", "Receso"],
            ["10:30 AM - 11:15 AM", "Gámez Mayra Cristina Modulo", "", "Linares Murga, Ana Concepción Social Estudiantil", "", ""],
            ["11:15 AM - 12:00 PM", "Gámez Mayra Cristina Modulo", "", "Linares Murga, Ana Concepción Social Estudiantil", "", ""],
            ["12:00 PM - 1:00 PM", "Receso","Receso","Receso","Receso","Receso" ],
            ["1:00 PM - 1:45 PM",  "Reyes Carpio, Valeriano Ciudadania y Valores","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Gámez, Mayra Cristina Modulo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Gámez, Mayra Cristina Modulo"],
            ["1:45 PM - 2:30 PM",  "Reyes Carpio, Valeriano Ciudadania y Valores","Reyes Carpio, Valeriano Ciudadania y Valores","Gámez, Mayra Cristina Modulo", "Navas Peña, Jaime Antonio Ciencias y Tecnologia","Gámez, Mayra Cristina Modulo"],
            ["2:30 PM - 2:45 PM",  "Receso", "Receso","Receso","Receso","Receso"],
            ["2:45 PM - 3:30 PM",  "Navas Peña, Jaime Antonio Ciencias y Tecnologia","Reyes Carpio, Valeriano Ciudadania y Valores","Gámez, Mayra Cristina Modulo","Zelada Monrenegro, René Precálculo","Gámez, Mayra Cristina Modulo"],
            ["3:30 PM - 4:15 PM",  "Navas Peña, Jaime Antonio Ciencias y Tecnologia","Reyes Carpio, Valeriano Ciudadania y Valores","Zelada Monrenegro, René Precálculo","Zelada Monrenegro, René Precálculo","Gámez, Mayra Cristina Modulo"],
            ["4:15 PM - 4:30 PM",  "Receso","Rceso","Receso","Receso","Receso"],
            ["4:30 PM - 5:15 PM",  "Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo"],
            ["5:15 PM - 6:00 PM",  "Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo","Navas Peña, Jaime Antonio Ciencias y Tecnologia","Erroa de Castillo, Hilda Siulan Lengua y Literatura","Zelada Monrenegro, René Precálculo"],
        ],
        "2-4": [
             ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
        "2-5": [
           ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
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
    
    "tercero":{
        "3-1":[
            ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
        "3-2":[
            ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
        "3-3":[
             ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["1:00 PM - 1:45 PM", "", "", "", "", ""],
            ["1:45 PM - 2:30 PM", "", "", "", "", ""],
            ["2:30 PM - 2:45 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["2:45 PM - 3:30 PM", "", "", "", "", ""],
            ["3:30 PM - 4:15 PM", "", "", "", "", ""],
            ["4:15 PM - 4:30 PM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["4:30 PM - 5:15 PM", "", "", "", "", ""],
            ["5:15 PM - 6:00 PM", "", "", "", "", ""],
        ],
        "3-4":[
             ["7:00 AM - 7:45 AM", "", "", "", "", ""],
            ["7:45 AM - 8:30 AM", "", "", "", "", ""],
            ["8:30 AM - 8:45 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["8:45 AM - 9:30 AM", "", "", "", "", ""],
            ["9:30 AM - 10:15 AM", "", "", "", "", ""],
            ["10:15 AM - 10:30 AM", "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
            ["10:30 AM - 11:15 PM", "", "", "", "", ""],
            ["11:15 PM - 12:00 PM", "", "", "", "", ""],
            ["12:00 PM - 1:00 PM",  "RECESO", "RECESO", "RECESO", "RECESO", "RECESO"],
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


document.addEventListener('DOMContentLoaded', function() {
    cargarHorario(añoActual, seccionActual);
    configurarBotones();
});


function configurarBotones() {
   
    const botonesAño = document.querySelectorAll('.btn-year');
    botonesAño.forEach(boton => {
        boton.addEventListener('click', function() {
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
        boton.addEventListener('click', function() {
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
            
            fila.forEach((celda, index) => {
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
    const añoTexto = añoActual === 'primero' ? 'Primer Año' : 'Segundo Año';
    titulo.textContent = `${añoTexto} - Sección ${seccionActual}`;
}                                                                                                                                                                                                                                                                                                                                                                                                                   
