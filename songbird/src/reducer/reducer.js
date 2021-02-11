import { handleActions } from "redux-actions";
import { restartGame, selectBird, toNextLevel } from "./actions";

const initialState = {
  categories: [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
    "Морские птицы"
  ],
  
  birds: [
    [       
      {
        id: 0,
        name: 'Дикуша',
        species: 'Falcipennis falcipennis',
        description: 'Дикуша – одна из редких и малоизученных птиц семейства тетеревиных. Внесена в Красную книгу МСОП, Красную книгу РФ.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Falcipennis_falcipennis_displaying.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/NETFZPZEUQ/XC349445-falcipennis%20falcipennis.mp3'
      },
      {
        id: 1,
        name: 'Белая куропатка',
        species: 'Lagopus lagopus',
        description: 'Белая куропатка - птица подсемейства тетеревиных отряда курообразных. Обитатель тундры, тайги и лесов Северного полушария.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Willow_grouse_standing.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MNQLBOLQFS/XC571265-Dalripa_Arjeplogsfj%C3%A4llen_Juni2020_200614-094046.mp3'
      },
      {
        id: 2,
        name: 'Глухарь',
        species: 'Tetrao urogallus',
        description: 'Глухарь - крупная птица из семейства фазановых, отряда курообразных. Названием «глухарь» птица обязана известной особенности токующего в брачный период самца утрачивать чуткость и бдительность, чем часто пользуются охотники.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Capercaillie_%288751340764%29.jpg/1024px-Capercaillie_%288751340764%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC554017-%282020-05-02%2004-27%29-LS143782%20-%20kopia.mp3'
      },
      {
        id: 3,
        name: 'Рябчик',
        species: 'Bonasa bonasia',
        description: 'Рябчик — птица из рода рябчиков, подсемейства тетеревиных, семейства фазановых отряда курообразных. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Haselhuhn-01.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VJTMVNCHXA/XC528040-NWS_Sinlahekin_RuffedGrouse_drumming_edited_XC.mp3'
      },
      {
        id: 4,
        name: 'Кеклик',
        species: 'Alectoris',
        description: 'Кеклики, или каменные куропатки, или горные курочки — род птиц подсемейства куропатковых (Perdicinae) семейства фазановых. Отличаются компактным телосложением, короткой шеей, крупной головой с коротким выгнутым клювом',//, лапами средней высоты с притуплённой шпорой, а также крыльями средней длины и весьма длинным хвостом.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Alectoris-chukar-001.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC569249-Perdrix%20bartavelle%20chant%20et%20cris%20rapeux%20en%20series.mp3'
      },
      {
        id: 5,
        name: 'Кавказский тетерев',
        species: 'Lyrurus mlokosiewiczi',
        description: 'Кавказский тетерев— крупная птица семейства фазановых (Phasianidae).Один из наименее изученных видов тетеревов по причине труднодоступности мест обитания.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tetras_du_caucase_jogo_0g.jpg/800px-Tetras_du_caucase_jogo_0g.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CEYSYKSPYR/XC178542-Lyrurus%20mlokosiewiczi.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Гуменник',
        species: 'Anser fabalis',
        description: 'Гуменник — водоплавающая птица из семейства утиных. Вид рода гуси, в котором могут выделять ряд подвидов.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Bean.goose.600pix.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNHUUXHXZS/XC536294-ansfab_202003_19_20_yom_2036.mp3'
      },
      {
        id: 1,
        name: 'Пискулька',
        species: 'Anser erythropus',
        description: 'Пискулька — птица семейства утиных, мелкий гусь. Название своё получила за писк, издаваемый в полёте.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Anser_erythropus.jpg/1024px-Anser_erythropus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC564391-Fj%C3%A4llg%C3%A5s_06.mp3'
      },
      {
        id: 2,
        name: 'Мандаринка',
        species: 'Aix galericulata',
        description: 'Мандаринка — небольшая птица рода лесных уток семейства утиных.Длина крыла взрослых мандаринок варьирует в пределах 210—245 мм.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Aix_galericulata_%28couple%29.jpg/1280px-Aix_galericulata_%28couple%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YDQKMZXDRL/XC534776-DM673134_bereinigt_MaE-bei%204min-Noise.mp3'
      },
      {
        id: 3,
        name: 'Чирок-клоктун',
        species: 'Sibirionetta formosa',
        description: 'Чирок-клоктун или клоктун — вид птиц из семейства утиных, единственный в роде Sibirionetta.Селезень этого вида имеет тёмную голову с рисунком из комбинации чёрного, жёлтого и зелёного цветов. Масса взрослой птицы 500—600 г, а длина тела 22 см.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Anas_formosa_%28male%29.jpg/275px-Anas_formosa_%28male%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC380277-Baikal%20Teal2017-6-30-4.mp3'
      },
      {
        id: 4,
        name: 'Кряква',
        species: 'Anas platyrhynchos',
        description: 'Кряква — птица из семейства утиных (Anatidae) отряда гусеобразных (Anseriformes). Наиболее известная и распространённая дикая утка. Длина тела самца около 62 см, самки — около 57 см, масса достигает 1—1,5 кг.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/1024px-Anas_platyrhynchos_male_female_quadrat.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GQMCPIVNXX/XC369832-Yellow-billed%20Duck.mp3'
      },
      {
        id: 5,
        name: 'Шилохвость',
        species: 'Anas acuta',
        description: 'Шилохвость или (устар.) шилень — многочисленная и одна из наиболее распространённых уток в мире. Гнездится на разнообразных внутренних водоёмах Европы, Азии и Северной Америки.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Northern_Pintails_%28Male_%26_Female%29_I_IMG_0911.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CFRYARSVHN/XC494802-Toicinho.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Каравайка',
        species: ' Plegadis falcinellus',
        description: 'Каравайка — широко распространённая птица из семейства ибисовых. Длина тела 48—66 см (в среднем около 56 см), размах крыльев 88—105 см, длина крыла 25—30 см, длина клюва 9—11 см. Масса тела может варьировать от 485 до 970 г.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Plegadis_falcinellus_Syracuse.jpg/1024px-Plegadis_falcinellus_Syracuse.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/PNYKOPBQBQ/XC530553-PLEFAL240220-T004%20%282%29.mp3'
      },
      {
        id: 1,
        name: 'Колпица',
        species: 'Platalea leucorodia',
        description: 'Колпица или обыкновенная колпица — болотная птица семейства ибисовых, подсемейства колпицы. Колпица достигает длины 1 м, веса в 1,2—2 кг. Размах крыльев 115—135 см. Окраска обыкновенной колпицы белая, клюв и ноги чёрные.',//В брачном наряде у колпиц развивается хохолок на затылке и охристое пятно в основании шеи',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Loeffler.jpg/1280px-Loeffler.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RNMRWBXEZJ/XC580606-Lepelaar%2C%20juveniel%2Cflight%20call%2C%20begging%20call%2C%20IGS%2C%20030820%2C%200058%20uur.mp3'
      },
      {
        id: 2,
        name: 'Священный ибис',
        species: 'Threskiornis aethiopicus',
        description: 'Священный ибис — птица из семейства ибисовых. Название своё получил потому, что был священной птицей в древнем Египте. Длина тела составляет в среднем 75 см.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Helig_ibis_%28Threskiornis_aethiopicus%29.jpg/800px-Helig_ibis_%28Threskiornis_aethiopicus%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SGLTZLDXYI/XC309388-sacred%20ibis%20chick.mp3'
      },
      {
        id: 3,
        name: 'Белый аист',
        species: 'Ciconia ciconia',
        description: 'Белый аист — крупная болотная птица из семейства аистовых.Рост белого аиста составляет 100—125 см, размах крыльев 155—200 см. Масса взрослой птицы достигает 4 кг. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ciconia_ciconia_01.JPG/800px-Ciconia_ciconia_01.JPG',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC490193-2019.07.06_15.37_01.mp3'
      },
      {
        id: 4,
        name: 'Амурский волчок',
        species: 'Ixobrychus eurhythmus',
        description: 'Амурский волчок — птица семейства цаплевых.Небольшая цапля длиной от 33 до 39 см. Оперение красно-бурого цвета, брюхо светлое, клюв и ноги жёлтые. У самца в противоположность самке спина каштанового цвета.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Von_Schrenck%27s_Bittern_%28Ixobrychus_eurhythmus%29%2C_Central_Catchment_Nature_Reserve%2C_Singapore_-_20140327.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XVXHTBZRRW/XC319945-Schrenck%27s%20Bittern%20song%2020160601%202039%20RUS%20OA%20Muraviovka%20Park%20TW%20LS_5.mp3'
      },
      {
        id: 5,
        name: 'Большая выпь',
        species: 'Botaurus stellaris',
        description: 'Большая выпь  — птица семейства цаплевых (Ardeidae). В настоящее время находится под угрозой исчезновения как вид на территории Москвы.Масса тела самца около 1 кг, иногда до 1,9 кг, рост до 70 см и выше, самки несколько меньше. Длина крыла у самцов в среднем 34 см, у самок — 31 см.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bittern_-_Botaurus_stellaris.jpg/800px-Bittern_-_Botaurus_stellaris.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GCTHJSYXXM/XC559712-200519_0303%20Raadas%20kaulushaikara%203.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Цветной бекас',
        species: 'Rostratula benghalensis',
        description: 'Цветной бекас — вид птиц из семейства цветных бекасов (Rostratulidae).С прямым длинным клювом и с широкими короткими крыльями. Размер птицы 19—24 см. Длина крыла 11,5—14,75 см, хвоста 4—5 см, клюва 4—5,1 см, плюсны 4—4,5 см.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Rostratula_benghalensis.jpg/800px-Rostratula_benghalensis.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/USJPNRHDGY/XC206311-131012_04_Greater%20Painted-snipe%E9%9B%9B%E9%B3%A5.mp3'
      },
      {
        id: 1,
        name: 'Ходулочник',
        species: 'Himantopus himantopus',
        description: 'Ходулочник — птица семейства шилоклювковых (Recurvirostridae). Занесена в красную книгу России.Длина туловища достигает от 33 до 36 сантиметров, из которых 6 сантиметров приходится на клюв.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/SL_Bundala_NP_asv2020-01_img09.jpg/275px-SL_Bundala_NP_asv2020-01_img09.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/JYPQCEFKAM/XC585566-200801-100507pernilongo.mp3'
      },
      {
        id: 2,
        name: 'Бегунок',
        species: ' Cursorius cursor',
        description: 'Бегунок — птица из семейства тиркушковых отряда ржанкообразных. Длина 19—22 см. Большая часть оперения желтовато-песочная, верх головы тёмный, через глаза и затылок проходит узкая чёрная полоска, над которой расположена белая.', // Брюхо белое, концы крыльев чёрные, клюв и ноги голубовато-серые. Самец и самка имеют схожую окраску.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Cream-coloured_Courser_%28Cursorius_cursor%29_Tal_Chhapar%2C_Churu%2C_Rajasthan%2C_India_February_15th%2C_2013.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EYDMHIJPXV/XC326739-Inland%20Dotterel%20AUDIO.mp3'
      },
      {
        id: 3,
        name: 'Чибис',
        species: 'Vanellus vanellus',
        description: 'Чибис или пигалица — небольшая птица семейства ржанковых. Клюв чёрный; глаз тёмно-бурый; четырехпалые ноги малиновые. Размеры крыла 21,5—23,75 сантиметра.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Kiebitz_050424ausschnitt.jpg/1024px-Kiebitz_050424ausschnitt.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZFHRWDKKKS/XC575383-2020-07-12-23h44-vanneau-hupp%C3%A9.mp3'
      },
      {
        id: 4,
        name: 'Тулес',
        species: 'Pluvialis squatarola',
        description: 'Тулес— птица семейства ржанковых (Charadriidae). Гнездится в арктической тундре. Длина тела от 26 до 29 см, вес 170—320 г. Размах крыльев от 56 до 63 см. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pluvialis_squatarola_%28summer_plumage%29.jpg/1280px-Pluvialis_squatarola_%28summer_plumage%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/FWZHXTNMKN/XC585630-NFC_PLUSQU.mp3'
      },
      {
        id: 5,
        name: 'Галстучник',
        species: 'Charadrius hiaticula',
        description: 'Галстучник — птица рода зуйки (Charadrius) из семейства ржанковых (Charadriidae).Небольшая птица крупнее воробья, обитающая на песчаных или галечниковых участках на берегах рек, озёр и морей.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Charadrius_hiaticula_He.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC575773-Envol%20limis%20divers%20dont%20grand%20gravelot%20et%20cocorli%20non%20audible.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Черноголовая гаичка',
        species: 'Poecile palustris',
        description: 'Черноголовая или болотная гаичка — вид птиц из семейства синицевых (Paridae).Общая длина 12—14 см, размах крыльев 18—20 см, масса 10—15 г[6].',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Parus_palustris02.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RVLNPQSYVW/XC570923-200623_19.6%28marsh%20tit%29.mp3'
      },
      {
        id: 1,
        name: 'Восточная синица',
        species: 'Parus minor',
        description: 'Восточная синица — вид воробьинообразных птиц из рода синицы, который вытеснил сходный вид большая синица (Parus major) в Японии и на Дальнем Востоке Российской Федерации в Среднем Приамурье, а также на Сахалине и Курильских островах. Залёты этого вида были отмечены на Камчатке',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Parus_minor_%28side%29.JPG/1280px-Parus_minor_%28side%29.JPG',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZPYEHLWXXX/XC576649-Tit%2C%20Japanese_2018-05-18_1405_Japan_Amami_ShizenKansatsuNoMori.mp3'
      },
      {
        id: 2,
        name: 'Белая лазоревка',
        species: 'Cyanistes cyanus',
        description: 'Белая лазоревка или князёк — небольшая певчая птица семейства синицевых, распространённая преимущественно в Европе восточнее Белоруссии, южной Сибири и Средней Азии. Ведёт оседлый образ жизни, в зимнее время кочует в пределах гнездового ареала.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Azure_Tit_-_Cyanistes_cyanus.jpg/1024px-Azure_Tit_-_Cyanistes_cyanus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC527294-Azure%20Tit%20Jalman%20170601_3230.mp3'
      },
      {
        id: 3,
        name: 'Обыкновенный ремез',
        species: 'Remiz pendulinus',
        description: 'Обыкновенный ремез — певчая птица семейства Ремезы.Длина тела ремеза примерно 12 см, вес до 20 г. Длина крыла до 60 мм. В глаза бросается серая голова с чёрной маской и красно-бурая спина. У молодых птиц чёрной маски ещё нет.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Remiz_pendulinus_%28Marek_Szczepanek%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/IJRRKWZVQN/XC559369-rempen%20m%20%C3%A4n%20also%20carspi%20halias%20200518.mp3'
      },
      {
        id: 4,
        name: 'Хохлатая синица',
        species: 'Lophophanes cristatus',
        description: 'Хохлатая синица или гренадёрка, гренадёр — небольшая певчая птица семейства синицевых, распространённая на большей части Европы. В северных и средних широтах обычна в хвойных, реже смешанных лесах.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Lophophanes_cristatus_-_01.jpg/1024px-Lophophanes_cristatus_-_01.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC562620-lophophanes%20cristatus_2020.05.26_09.18_01.mp3'
      },
      {
        id: 5,
        name: 'Желтобрюхая синица',
        species: 'Periparus venustulus',
        description: 'Желтобрюхая синица — мелкий вид синиц из семейства Paridae, обитающий в западной и центральной части Китая. Близка к московке. Область встреч во внегнездовое время довольно велика.', //часто встречается в составе крупных смешанных стаек птиц.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Yellow-bellied_Tit_%28Pardaliparus_venustulus%29_%288077149502%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/LOAVJDRPYN/XC565092-%20-%2020200601%20-%20820%20Forestry%20Station.mp3'
      }
    ],
    [
      {
        id: 0,
        name: 'Зяблик',
        species: 'Fringílla coélebs',
        description: 'Зяблик — певчая птица семейства вьюрковых. Размер — 14—18 см. Ярко выражен половой диморфизм.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Fringilla_coelebs_chaffinch_male_edit2.jpg/800px-Fringilla_coelebs_chaffinch_male_edit2.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/XC551371-0856%20BLL518-23%20Pachyramphus%20polychopterus.mp3'
      },
      {
        id: 1,
        name: 'Вьюрок',
        species: 'Fringilla montifringilla',
        description: 'Вьюрок или юрок — вид певчих птиц из семейства вьюрковых. Из всех вьюрковых у него наблюдается наиболее выраженное перелётное поведение. Величина вьюрка соответствует величине воробья.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Fringilla_montifringilla_4_%28Martin_Mecnarowski%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BZVYBRUAAE/XC324584-Tibetan%20Snowfinch_Rouergai_Sichuan_27%20May%202016_160528_01%20-%20trimmed.mp3'
      },    
      {
        id: 2,
        name: 'Обыкновенный щур',
        species: 'Pinicola enucleator',
        description: 'Обыкновенный щур — птица семейства вьюрковые. Обитает в хвойных лесах таёжной зоны. Питается семенами хвойных деревьев и ягодами. Птица размером со скворца, плотного сложения, с толстым, коротким, чуть крючковатым клювом и сравнительно длинным вырезанным хвостом. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Pinicola-enucleator-001B.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/QBVYYBZQKH/XC514735-Red-bearded%20Bee-eater-calls-1-3-Xeno-Ipoh%2C%20Perak%2C%20Malaysia-8th%20August%202019.mp3'
      },
      {
        id: 3,
        name: 'Клёст-сосновик',
        species: 'Loxia pytyopsittacus',
        description: 'Клёст-сосновик — певчая птица семейства вьюрковых (Fringillidae).Довольно крупный вид клестов: длина его тела составляет от 16 до 18 см. Окраска оперения идентична окраске оперения клеста-еловика.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Loxia_pityopsittacus_NAUMANN.jpg/271px-Loxia_pityopsittacus_NAUMANN.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC535315-Furukorsnebb%201%20XC%20Stange%20Refsal%20Elias%20A.%20Ryberg20200312110733_111.mp3'
      },
      {
        id: 4,
        name: 'Обыкновенная чечевица',
        species: 'Carpodacus erythrinus',
        description: 'Обыкновенная чечевица — птица семейства вьюрковых.Размером с воробья. У взрослого самца спина, крылья и хвост красновато-бурые, голова и грудь ярко-красные', //брюшко (а у птиц из восточной части ареала — нередко и грудь) белое с розовым оттенком. Самки и молодые птицы буровато-серые, брюшко светлее спины.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dziwonia%28Carpodacus_erythrinus%29cropped.jpg/275px-Dziwonia%28Carpodacus_erythrinus%29cropped.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/LHKLVTXBWH/XC575827-Ciuffolotto%20scarlatto%2000%2C55%20Sergio.mp3'
      },
      {
        id: 5,
        name: 'Чиж',
        species: 'Carduelis spinus',
        description: 'Чиж — один из видов певчих птиц из семейства вьюрковых, отряда воробьинообразных. Распространён в Евразии, как правило, в хвойных лесах. Чижей часто держат в домашних условиях, в клетках, ради их пения.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Carduelis_spinus_female.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MDZVOPUOXU/XC483003-190615_11.lawrences.goldfinch.big.rock.creek.cg.lance.benner.mp3'
      }
    ],
    [       
      {
        id: 0,
        name: 'Дикуша',
        species: 'Falcipennis falcipennis',
        description: 'Дикуша – одна из редких и малоизученных птиц семейства тетеревиных. Внесена в Красную книгу МСОП, Красную книгу РФ.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Falcipennis_falcipennis_displaying.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/NETFZPZEUQ/XC349445-falcipennis%20falcipennis.mp3'
      },
      {
        id: 1,
        name: 'Белая куропатка',
        species: 'Lagopus lagopus',
        description: 'Белая куропатка - птица подсемейства тетеревиных отряда курообразных. Обитатель тундры, тайги и лесов Северного полушария.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Willow_grouse_standing.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MNQLBOLQFS/XC571265-Dalripa_Arjeplogsfj%C3%A4llen_Juni2020_200614-094046.mp3'
      },
      {
        id: 2,
        name: 'Глухарь',
        species: 'Tetrao urogallus',
        description: 'Глухарь - крупная птица из семейства фазановых, отряда курообразных. Названием «глухарь» птица обязана известной особенности токующего в брачный период самца утрачивать чуткость и бдительность, чем часто пользуются охотники.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Capercaillie_%288751340764%29.jpg/1024px-Capercaillie_%288751340764%29.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC554017-%282020-05-02%2004-27%29-LS143782%20-%20kopia.mp3'
      },
      {
        id: 3,
        name: 'Рябчик',
        species: 'Bonasa bonasia',
        description: 'Рябчик — птица из рода рябчиков, подсемейства тетеревиных, семейства фазановых отряда курообразных. ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Haselhuhn-01.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VJTMVNCHXA/XC528040-NWS_Sinlahekin_RuffedGrouse_drumming_edited_XC.mp3'
      },
      {
        id: 4,
        name: 'Кеклик',
        species: 'Alectoris',
        description: 'Кеклики, или каменные куропатки, или горные курочки — род птиц подсемейства куропатковых (Perdicinae) семейства фазановых. Отличаются компактным телосложением, короткой шеей, крупной головой с коротким выгнутым клювом',//, лапами средней высоты с притуплённой шпорой, а также крыльями средней длины и весьма длинным хвостом.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Alectoris-chukar-001.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC569249-Perdrix%20bartavelle%20chant%20et%20cris%20rapeux%20en%20series.mp3'
      },
      {
        id: 5,
        name: 'Кавказский тетерев',
        species: 'Lyrurus mlokosiewiczi',
        description: 'Кавказский тетерев— крупная птица семейства фазановых (Phasianidae).Один из наименее изученных видов тетеревов по причине труднодоступности мест обитания.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tetras_du_caucase_jogo_0g.jpg/800px-Tetras_du_caucase_jogo_0g.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CEYSYKSPYR/XC178542-Lyrurus%20mlokosiewiczi.mp3'
      }
    ]
  ],

  selectedBirdId: null,
  randomBirdId: Math.floor(Math.random() * (6)),
  level: 0,
  score: 0, 
  guessed: false,
  choosenBirdsIds: [],
  endGame: false
};

export const reducer = handleActions({
  [selectBird]: (state, { payload: birdId }) => {
    
    const playAudio = (melody) => {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = melody;
      audio.play();
    }

    if(birdId === state.randomBirdId && state.guessed === false) {

      playAudio('https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3');

      return {
        ...state,
        selectedBirdId: birdId,
        guessed: true,
        score: state.score + (state.birds[state.level].length - 1) - state.choosenBirdsIds.length
      }
    } else if(state.guessed === false){
      if(!state.choosenBirdsIds.includes(birdId)) {
        playAudio('https://birds-quiz.netlify.app/static/media/error.165166d5.mp3');
      }

      const addIdToChoosenBirdsIds = (choosenBirdsIds, birdId) => {
        return !choosenBirdsIds.includes(birdId) ? [...choosenBirdsIds, birdId] : [...choosenBirdsIds];
      }

      return {
        ...state,
        selectedBirdId: birdId,
        choosenBirdsIds: addIdToChoosenBirdsIds([...state.choosenBirdsIds], birdId)
      }
    } else {
      return {
        ...state,
        selectedBirdId: birdId
      }
    }
  },
  [toNextLevel]: (state) => {

    return state.birds[state.level + 1]
    ?
    {
      ...state,
      level: state.level + 1,
      guessed: false,
      choosenBirdsIds: [],
      selectedBirdId: null,
      randomBirdId: Math.floor(Math.random() * (6))
    }
    :
    {
      ...state,
      endGame: true
    }

  },
  [restartGame]: (state) => ({
    ...state,
    ...initialState
  })
}, initialState);