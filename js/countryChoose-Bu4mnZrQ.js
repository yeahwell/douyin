import{_ as v,S as f}from"./common-BNKVqjpR.js";import"./vendor-Jz-U8a5Z.js";const u={name:"countryChoose",components:{Search:f},data(){return{country:[{code:"+1-264",name:"安圭拉",pinyin:"A"},{code:"+1-268",name:"安地卡及巴布达",pinyin:"A"},{code:"+244",name:"安哥拉",pinyin:"A"},{code:"+353",name:"爱尔兰",pinyin:"A"},{code:"+372",name:"爱沙尼亚",pinyin:"A"},{code:"+376",name:"安道尔",pinyin:"A"},{code:"+853",name:"澳门",pinyin:"A"},{code:"+20",name:"埃及",pinyin:"A"},{code:"+61",name:"澳大利亚  科科斯（基林）群岛  圣诞岛",pinyin:"A"},{code:"+1-242",name:"巴哈马",pinyin:"B"},{code:"+1-246",name:"巴巴多斯",pinyin:"B"},{code:"+1-441",name:"百慕大",pinyin:"B"},{code:"+226",name:"布吉纳法索",pinyin:"B"},{code:"+229",name:"贝宁",pinyin:"B"},{code:"+257",name:"布隆迪",pinyin:"B"},{code:"+267",name:"博茨瓦纳",pinyin:"B"},{code:"+354",name:"冰岛",pinyin:"B"},{code:"+359",name:"保加利亚",pinyin:"B"},{code:"+375",name:"白俄罗斯",pinyin:"B"},{code:"+387",name:"波斯尼亚和黑塞哥维那",pinyin:"B"},{code:"+389",name:"北马其顿",pinyin:"B"},{code:"+501",name:"伯利兹",pinyin:"B"},{code:"+507",name:"巴拿马",pinyin:"B"},{code:"+591",name:"玻利维亚",pinyin:"B"},{code:"+595",name:"巴拉圭",pinyin:"B"},{code:"+675",name:"巴布亚新几内亚",pinyin:"B"},{code:"+680",name:"帛琉",pinyin:"B"},{code:"+970",name:"巴勒斯坦",pinyin:"B"},{code:"+973",name:"巴林",pinyin:"B"},{code:"+975",name:"不丹",pinyin:"B"},{code:"+32",name:"比利时",pinyin:"B"},{code:"+48",name:"波兰",pinyin:"B"},{code:"+55",name:"巴西",pinyin:"B"},{code:"+92",name:"巴基斯坦",pinyin:"B"},{code:"+240",name:"赤道几内亚",pinyin:"C"},{code:"+1-767",name:"多米尼克",pinyin:"D"},{code:"+228",name:"多哥",pinyin:"D"},{code:"+670",name:"东帝汶",pinyin:"D"},{code:"+45",name:"丹麦",pinyin:"D"},{code:"+49",name:"德国",pinyin:"D"},{code:"+82",name:"大韩民国",pinyin:"D"},{code:"+213",name:"阿尔及利亚",pinyin:"E"},{code:"+247",name:"阿森松岛",pinyin:"E"},{code:"+291",name:"厄立特里亚",pinyin:"E"},{code:"+297",name:"阿鲁巴",pinyin:"E"},{code:"+355",name:"阿尔巴尼亚",pinyin:"E"},{code:"+593",name:"厄瓜多尔",pinyin:"E"},{code:"+968",name:"阿曼",pinyin:"E"},{code:"+971",name:"阿联酋",pinyin:"E"},{code:"+994",name:"阿塞拜疆",pinyin:"E"},{code:"+54",name:"阿根廷",pinyin:"E"},{code:"+93",name:"阿富汗",pinyin:"E"},{code:"+238",name:"佛得角",pinyin:"F"},{code:"+298",name:"法罗群岛",pinyin:"F"},{code:"+358",name:"芬兰",pinyin:"F"},{code:"+379",name:"梵蒂冈",pinyin:"F"},{code:"+500",name:"福克兰群岛和 南乔治亚和南桑威奇群岛",pinyin:"F"},{code:"+594",name:"法属圭亚那",pinyin:"F"},{code:"+679",name:"斐济",pinyin:"F"},{code:"+689",name:"法属玻里尼西亚",pinyin:"F"},{code:"+33",name:"法国",pinyin:"F"},{code:"+63",name:"菲律宾",pinyin:"F"},{code:"+1-473",name:"格瑞那达",pinyin:"G"},{code:"+220",name:"冈比亚",pinyin:"G"},{code:"+242",name:"刚果（布）",pinyin:"G"},{code:"+243",name:"刚果（金）（即前 扎伊尔）",pinyin:"G"},{code:"+299",name:"格陵兰",pinyin:"G"},{code:"+506",name:"哥斯达黎加",pinyin:"G"},{code:"+590",name:"瓜德罗普",pinyin:"G"},{code:"+592",name:"圭亚那",pinyin:"G"},{code:"+995",name:"格鲁吉亚",pinyin:"G"},{code:"+53",name:"古巴",pinyin:"G"},{code:"+57",name:"哥伦比亚",pinyin:"G"},{code:"+504",name:"洪都拉斯",pinyin:"H"},{code:"+509",name:"海地",pinyin:"H"},{code:"+31",name:"荷兰",pinyin:"H"},{code:"+224",name:"几内亚",pinyin:"J"},{code:"+233",name:"加纳",pinyin:"J"},{code:"+241",name:"加彭",pinyin:"J"},{code:"+245",name:"几内亚比绍",pinyin:"J"},{code:"+253",name:"吉布提",pinyin:"J"},{code:"+420",name:"捷克",pinyin:"J"},{code:"+686",name:"基里巴斯",pinyin:"J"},{code:"+855",name:"柬埔寨",pinyin:"J"},{code:"+996",name:"吉尔吉斯斯坦",pinyin:"J"},{code:"+1",name:"加拿大",pinyin:"J"},{code:"+1-345",name:"开曼群岛",pinyin:"K"},{code:"+225",name:"科特迪瓦",pinyin:"K"},{code:"+237",name:"喀麦隆",pinyin:"K"},{code:"+254",name:"肯尼亚",pinyin:"K"},{code:"+269",name:"科摩罗",pinyin:"K"},{code:"+383",name:"科索沃",pinyin:"K"},{code:"+385",name:"克罗地亚",pinyin:"K"},{code:"+682",name:"库克群岛",pinyin:"K"},{code:"+965",name:"科威特",pinyin:"K"},{code:"+974",name:"卡塔尔",pinyin:"K"},{code:"+218",name:"利比亚",pinyin:"L"},{code:"+231",name:"利比里亚",pinyin:"L"},{code:"+250",name:"卢旺达",pinyin:"L"},{code:"+262",name:"留尼汪和 马约特",pinyin:"L"},{code:"+266",name:"赖索托",pinyin:"L"},{code:"+352",name:"卢森堡",pinyin:"L"},{code:"+370",name:"立陶宛",pinyin:"L"},{code:"+371",name:"拉脱维亚",pinyin:"L"},{code:"+423",name:"列支敦斯登",pinyin:"L"},{code:"+856",name:"老挝",pinyin:"L"},{code:"+961",name:"黎巴嫩",pinyin:"L"},{code:"+40",name:"罗马尼亚",pinyin:"L"},{code:"+1-664",name:"蒙特塞拉特",pinyin:"M"},{code:"+212",name:"摩洛哥",pinyin:"M"},{code:"+222",name:"毛里塔尼亚",pinyin:"M"},{code:"+223",name:"马里",pinyin:"M"},{code:"+230",name:"模里西斯",pinyin:"M"},{code:"+258",name:"莫桑比克",pinyin:"M"},{code:"+261",name:"马达加斯加",pinyin:"M"},{code:"+265",name:"马拉维",pinyin:"M"},{code:"+356",name:"马尔他",pinyin:"M"},{code:"+373",name:"摩尔多瓦",pinyin:"M"},{code:"+377",name:"摩纳哥",pinyin:"M"},{code:"+382",name:"蒙特内哥罗",pinyin:"M"},{code:"+596",name:"马提尼克",pinyin:"M"},{code:"+691",name:"密克罗尼西亚联邦",pinyin:"M"},{code:"+692",name:"马绍尔群岛",pinyin:"M"},{code:"+880",name:"孟加拉国 孟加拉国",pinyin:"M"},{code:"+960",name:"马尔地夫",pinyin:"M"},{code:"+976",name:"蒙古国",pinyin:"M"},{code:"+51",name:"秘鲁",pinyin:"M"},{code:"+52",name:"墨西哥",pinyin:"M"},{code:"+95",name:"缅甸",pinyin:"M"},{code:"+1",name:"美国",pinyin:"M"},{code:"+211",name:"南苏丹",pinyin:"N"},{code:"+227",name:"尼日尔",pinyin:"N"},{code:"+234",name:"奈及利亚",pinyin:"N"},{code:"+264",name:"纳米比亚",pinyin:"N"},{code:"+505",name:"尼加拉瓜",pinyin:"N"},{code:"+674",name:"瑙鲁",pinyin:"N"},{code:"+683",name:"纽埃",pinyin:"N"},{code:"+977",name:"尼泊尔",pinyin:"N"},{code:"+27",name:"南非",pinyin:"N"},{code:"+47",name:"挪威",pinyin:"N"},{code:"+351",name:"葡萄牙",pinyin:"P"},{code:"+41",name:"瑞士",pinyin:"R"},{code:"+46",name:"瑞典",pinyin:"R"},{code:"+81",name:"日本",pinyin:"R"},{code:"+1-721",name:"圣马丁",pinyin:"S"},{code:"+1-758",name:"圣卢西亚",pinyin:"S"},{code:"+1-784",name:"圣文森特和格林纳丁斯",pinyin:"S"},{code:"+221",name:"塞内加尔",pinyin:"S"},{code:"+232",name:"塞拉利昂",pinyin:"S"},{code:"+239",name:"圣多美和普林西比",pinyin:"S"},{code:"+248",name:"塞舌尔",pinyin:"S"},{code:"+249",name:"苏丹",pinyin:"S"},{code:"+252",name:"索马利亚",pinyin:"S"},{code:"+259",name:"桑给巴尔，但从未使用",pinyin:"S"},{code:"+260",name:"尚比亚",pinyin:"S"},{code:"+268",name:"斯威士兰",pinyin:"S"},{code:"+290",name:"圣赫勒拿 和 特里斯坦-达库尼亚",pinyin:"S"},{code:"+357",name:"赛普勒斯",pinyin:"S"},{code:"+378",name:"圣马力诺",pinyin:"S"},{code:"+381",name:"塞尔维亚",pinyin:"S"},{code:"+386",name:"斯洛维尼亚",pinyin:"S"},{code:"+421",name:"斯洛伐克",pinyin:"S"},{code:"+503",name:"萨尔瓦多",pinyin:"S"},{code:"+508",name:"圣皮埃尔和密克隆",pinyin:"S"},{code:"+597",name:"苏里南",pinyin:"S"},{code:"+677",name:"所罗门群岛",pinyin:"S"},{code:"+685",name:"萨摩亚",pinyin:"S"},{code:"+966",name:"沙乌地阿拉伯",pinyin:"S"},{code:"+94",name:"斯里兰卡",pinyin:"S"},{code:"+1-649",name:"特克斯和凯科斯群岛",pinyin:"T"},{code:"+216",name:"突尼西亚",pinyin:"T"},{code:"+255",name:"坦桑尼亚",pinyin:"T"},{code:"+676",name:"汤加",pinyin:"T"},{code:"+688",name:"图瓦卢",pinyin:"T"},{code:"+690",name:"托克劳",pinyin:"T"},{code:"+992",name:"塔吉克斯坦",pinyin:"T"},{code:"+993",name:"土库曼斯坦",pinyin:"T"},{code:"+66",name:"泰国",pinyin:"T"},{code:"+90",name:"土耳其",pinyin:"T"},{code:"+256",name:"乌干达",pinyin:"W"},{code:"+380",name:"乌克兰",pinyin:"W"},{code:"+502",name:"危地马拉",pinyin:"W"},{code:"+673",name:"文莱",pinyin:"W"},{code:"+678",name:"瓦努阿图",pinyin:"W"},{code:"+681",name:"瓦利斯和富图纳",pinyin:"W"},{code:"+998",name:"乌兹别克斯坦",pinyin:"W"},{code:"+58",name:"委内瑞拉",pinyin:"W"},{code:"+210",name:"西撒哈拉",pinyin:"X"},{code:"+263",name:"辛巴威",pinyin:"X"},{code:"+687",name:"新喀里多尼亚",pinyin:"X"},{code:"+852",name:"香港",pinyin:"X"},{code:"+963",name:"叙利亚",pinyin:"X"},{code:"+30",name:"希腊",pinyin:"X"},{code:"+34",name:"西班牙",pinyin:"X"},{code:"+36",name:"匈牙利",pinyin:"X"},{code:"+64",name:"新西兰",pinyin:"X"},{code:"+65",name:"新加坡",pinyin:"X"},{code:"+1-284",name:"英属维尔京群岛",pinyin:"Y"},{code:"+246",name:"英属印度洋领地",pinyin:"Y"},{code:"+251",name:"衣索比亚",pinyin:"Y"},{code:"+374",name:"亚美尼亚",pinyin:"Y"},{code:"+962",name:"约旦",pinyin:"Y"},{code:"+964",name:"伊拉克",pinyin:"Y"},{code:"+967",name:"叶门",pinyin:"Y"},{code:"+972",name:"以色列",pinyin:"Y"},{code:"+39",name:"义大利",pinyin:"Y"},{code:"+44",name:"英国",pinyin:"Y"},{code:"+62",name:"印尼",pinyin:"Y"},{code:"+84",name:"越南",pinyin:"Y"},{code:"+91",name:"印度",pinyin:"Y"},{code:"+98",name:"伊朗",pinyin:"Y"},{code:"+235",name:"乍得",pinyin:"Z"},{code:"+236",name:"中非",pinyin:"Z"},{code:"+350",name:"直布罗陀",pinyin:"Z"},{code:"+850",name:"朝鲜民主主义人民共和国",pinyin:"Z"},{code:"+886",name:"中华民国",pinyin:"Z"},{code:"+56",name:"智利",pinyin:"Z"},{code:"+86",name:"中国",pinyin:"Z"}],countryOk:{A:[{code:"+1-264",name:"安圭拉",pinyin:"A"},{code:"+1-268",name:"安地卡及巴布达",pinyin:"A"},{code:"+244",name:"安哥拉",pinyin:"A"},{code:"+353",name:"爱尔兰",pinyin:"A"},{code:"+372",name:"爱沙尼亚",pinyin:"A"},{code:"+376",name:"安道尔",pinyin:"A"},{code:"+853",name:"澳门",pinyin:"A"},{code:"+20",name:"埃及",pinyin:"A"},{code:"+61",name:"澳大利亚  科科斯（基林）群岛  圣诞岛",pinyin:"A"}],B:[{code:"+1-242",name:"巴哈马",pinyin:"B"},{code:"+1-246",name:"巴巴多斯",pinyin:"B"},{code:"+1-441",name:"百慕大",pinyin:"B"},{code:"+226",name:"布吉纳法索",pinyin:"B"},{code:"+229",name:"贝宁",pinyin:"B"},{code:"+257",name:"布隆迪",pinyin:"B"},{code:"+267",name:"博茨瓦纳",pinyin:"B"},{code:"+354",name:"冰岛",pinyin:"B"},{code:"+359",name:"保加利亚",pinyin:"B"},{code:"+375",name:"白俄罗斯",pinyin:"B"},{code:"+387",name:"波斯尼亚和黑塞哥维那",pinyin:"B"},{code:"+389",name:"北马其顿",pinyin:"B"},{code:"+501",name:"伯利兹",pinyin:"B"},{code:"+507",name:"巴拿马",pinyin:"B"},{code:"+591",name:"玻利维亚",pinyin:"B"},{code:"+595",name:"巴拉圭",pinyin:"B"},{code:"+675",name:"巴布亚新几内亚",pinyin:"B"},{code:"+680",name:"帛琉",pinyin:"B"},{code:"+970",name:"巴勒斯坦",pinyin:"B"},{code:"+973",name:"巴林",pinyin:"B"},{code:"+975",name:"不丹",pinyin:"B"},{code:"+32",name:"比利时",pinyin:"B"},{code:"+48",name:"波兰",pinyin:"B"},{code:"+55",name:"巴西",pinyin:"B"},{code:"+92",name:"巴基斯坦",pinyin:"B"}],C:[{code:"+240",name:"赤道几内亚",pinyin:"C"}],D:[{code:"+1-767",name:"多米尼克",pinyin:"D"},{code:"+228",name:"多哥",pinyin:"D"},{code:"+670",name:"东帝汶",pinyin:"D"},{code:"+45",name:"丹麦",pinyin:"D"},{code:"+49",name:"德国",pinyin:"D"},{code:"+82",name:"大韩民国",pinyin:"D"}],E:[{code:"+213",name:"阿尔及利亚",pinyin:"E"},{code:"+247",name:"阿森松岛",pinyin:"E"},{code:"+291",name:"厄立特里亚",pinyin:"E"},{code:"+297",name:"阿鲁巴",pinyin:"E"},{code:"+355",name:"阿尔巴尼亚",pinyin:"E"},{code:"+593",name:"厄瓜多尔",pinyin:"E"},{code:"+968",name:"阿曼",pinyin:"E"},{code:"+971",name:"阿联酋",pinyin:"E"},{code:"+994",name:"阿塞拜疆",pinyin:"E"},{code:"+54",name:"阿根廷",pinyin:"E"},{code:"+93",name:"阿富汗",pinyin:"E"}],F:[{code:"+238",name:"佛得角",pinyin:"F"},{code:"+298",name:"法罗群岛",pinyin:"F"},{code:"+358",name:"芬兰",pinyin:"F"},{code:"+379",name:"梵蒂冈",pinyin:"F"},{code:"+500",name:"福克兰群岛和 南乔治亚和南桑威奇群岛",pinyin:"F"},{code:"+594",name:"法属圭亚那",pinyin:"F"},{code:"+679",name:"斐济",pinyin:"F"},{code:"+689",name:"法属玻里尼西亚",pinyin:"F"},{code:"+33",name:"法国",pinyin:"F"},{code:"+63",name:"菲律宾",pinyin:"F"}],G:[{code:"+1-473",name:"格瑞那达",pinyin:"G"},{code:"+220",name:"冈比亚",pinyin:"G"},{code:"+242",name:"刚果（布）",pinyin:"G"},{code:"+243",name:"刚果（金）（即前 扎伊尔）",pinyin:"G"},{code:"+299",name:"格陵兰",pinyin:"G"},{code:"+506",name:"哥斯达黎加",pinyin:"G"},{code:"+590",name:"瓜德罗普",pinyin:"G"},{code:"+592",name:"圭亚那",pinyin:"G"},{code:"+995",name:"格鲁吉亚",pinyin:"G"},{code:"+53",name:"古巴",pinyin:"G"},{code:"+57",name:"哥伦比亚",pinyin:"G"}],H:[{code:"+504",name:"洪都拉斯",pinyin:"H"},{code:"+509",name:"海地",pinyin:"H"},{code:"+31",name:"荷兰",pinyin:"H"}],J:[{code:"+224",name:"几内亚",pinyin:"J"},{code:"+233",name:"加纳",pinyin:"J"},{code:"+241",name:"加彭",pinyin:"J"},{code:"+245",name:"几内亚比绍",pinyin:"J"},{code:"+253",name:"吉布提",pinyin:"J"},{code:"+420",name:"捷克",pinyin:"J"},{code:"+686",name:"基里巴斯",pinyin:"J"},{code:"+855",name:"柬埔寨",pinyin:"J"},{code:"+996",name:"吉尔吉斯斯坦",pinyin:"J"},{code:"+1",name:"加拿大",pinyin:"J"}],K:[{code:"+1-345",name:"开曼群岛",pinyin:"K"},{code:"+225",name:"科特迪瓦",pinyin:"K"},{code:"+237",name:"喀麦隆",pinyin:"K"},{code:"+254",name:"肯尼亚",pinyin:"K"},{code:"+269",name:"科摩罗",pinyin:"K"},{code:"+383",name:"科索沃",pinyin:"K"},{code:"+385",name:"克罗地亚",pinyin:"K"},{code:"+682",name:"库克群岛",pinyin:"K"},{code:"+965",name:"科威特",pinyin:"K"},{code:"+974",name:"卡塔尔",pinyin:"K"}],L:[{code:"+218",name:"利比亚",pinyin:"L"},{code:"+231",name:"利比里亚",pinyin:"L"},{code:"+250",name:"卢旺达",pinyin:"L"},{code:"+262",name:"留尼汪和 马约特",pinyin:"L"},{code:"+266",name:"赖索托",pinyin:"L"},{code:"+352",name:"卢森堡",pinyin:"L"},{code:"+370",name:"立陶宛",pinyin:"L"},{code:"+371",name:"拉脱维亚",pinyin:"L"},{code:"+423",name:"列支敦斯登",pinyin:"L"},{code:"+856",name:"老挝",pinyin:"L"},{code:"+961",name:"黎巴嫩",pinyin:"L"},{code:"+40",name:"罗马尼亚",pinyin:"L"}],M:[{code:"+1-664",name:"蒙特塞拉特",pinyin:"M"},{code:"+212",name:"摩洛哥",pinyin:"M"},{code:"+222",name:"毛里塔尼亚",pinyin:"M"},{code:"+223",name:"马里",pinyin:"M"},{code:"+230",name:"模里西斯",pinyin:"M"},{code:"+258",name:"莫桑比克",pinyin:"M"},{code:"+261",name:"马达加斯加",pinyin:"M"},{code:"+265",name:"马拉维",pinyin:"M"},{code:"+356",name:"马尔他",pinyin:"M"},{code:"+373",name:"摩尔多瓦",pinyin:"M"},{code:"+377",name:"摩纳哥",pinyin:"M"},{code:"+382",name:"蒙特内哥罗",pinyin:"M"},{code:"+596",name:"马提尼克",pinyin:"M"},{code:"+691",name:"密克罗尼西亚联邦",pinyin:"M"},{code:"+692",name:"马绍尔群岛",pinyin:"M"},{code:"+880",name:"孟加拉国 孟加拉国",pinyin:"M"},{code:"+960",name:"马尔地夫",pinyin:"M"},{code:"+976",name:"蒙古国",pinyin:"M"},{code:"+51",name:"秘鲁",pinyin:"M"},{code:"+52",name:"墨西哥",pinyin:"M"},{code:"+95",name:"缅甸",pinyin:"M"},{code:"+1",name:"美国",pinyin:"M"}],N:[{code:"+211",name:"南苏丹",pinyin:"N"},{code:"+227",name:"尼日尔",pinyin:"N"},{code:"+234",name:"奈及利亚",pinyin:"N"},{code:"+264",name:"纳米比亚",pinyin:"N"},{code:"+505",name:"尼加拉瓜",pinyin:"N"},{code:"+674",name:"瑙鲁",pinyin:"N"},{code:"+683",name:"纽埃",pinyin:"N"},{code:"+977",name:"尼泊尔",pinyin:"N"},{code:"+27",name:"南非",pinyin:"N"},{code:"+47",name:"挪威",pinyin:"N"}],P:[{code:"+351",name:"葡萄牙",pinyin:"P"}],R:[{code:"+41",name:"瑞士",pinyin:"R"},{code:"+46",name:"瑞典",pinyin:"R"},{code:"+81",name:"日本",pinyin:"R"}],S:[{code:"+1-721",name:"圣马丁",pinyin:"S"},{code:"+1-758",name:"圣卢西亚",pinyin:"S"},{code:"+1-784",name:"圣文森特和格林纳丁斯",pinyin:"S"},{code:"+221",name:"塞内加尔",pinyin:"S"},{code:"+232",name:"塞拉利昂",pinyin:"S"},{code:"+239",name:"圣多美和普林西比",pinyin:"S"},{code:"+248",name:"塞舌尔",pinyin:"S"},{code:"+249",name:"苏丹",pinyin:"S"},{code:"+252",name:"索马利亚",pinyin:"S"},{code:"+259",name:"桑给巴尔，但从未使用",pinyin:"S"},{code:"+260",name:"尚比亚",pinyin:"S"},{code:"+268",name:"斯威士兰",pinyin:"S"},{code:"+290",name:"圣赫勒拿 和 特里斯坦-达库尼亚",pinyin:"S"},{code:"+357",name:"赛普勒斯",pinyin:"S"},{code:"+378",name:"圣马力诺",pinyin:"S"},{code:"+381",name:"塞尔维亚",pinyin:"S"},{code:"+386",name:"斯洛维尼亚",pinyin:"S"},{code:"+421",name:"斯洛伐克",pinyin:"S"},{code:"+503",name:"萨尔瓦多",pinyin:"S"},{code:"+508",name:"圣皮埃尔和密克隆",pinyin:"S"},{code:"+597",name:"苏里南",pinyin:"S"},{code:"+677",name:"所罗门群岛",pinyin:"S"},{code:"+685",name:"萨摩亚",pinyin:"S"},{code:"+966",name:"沙乌地阿拉伯",pinyin:"S"},{code:"+94",name:"斯里兰卡",pinyin:"S"}],T:[{code:"+1-649",name:"特克斯和凯科斯群岛",pinyin:"T"},{code:"+216",name:"突尼西亚",pinyin:"T"},{code:"+255",name:"坦桑尼亚",pinyin:"T"},{code:"+676",name:"汤加",pinyin:"T"},{code:"+688",name:"图瓦卢",pinyin:"T"},{code:"+690",name:"托克劳",pinyin:"T"},{code:"+992",name:"塔吉克斯坦",pinyin:"T"},{code:"+993",name:"土库曼斯坦",pinyin:"T"},{code:"+66",name:"泰国",pinyin:"T"},{code:"+90",name:"土耳其",pinyin:"T"}],W:[{code:"+256",name:"乌干达",pinyin:"W"},{code:"+380",name:"乌克兰",pinyin:"W"},{code:"+502",name:"危地马拉",pinyin:"W"},{code:"+673",name:"文莱",pinyin:"W"},{code:"+678",name:"瓦努阿图",pinyin:"W"},{code:"+681",name:"瓦利斯和富图纳",pinyin:"W"},{code:"+998",name:"乌兹别克斯坦",pinyin:"W"},{code:"+58",name:"委内瑞拉",pinyin:"W"}],X:[{code:"+210",name:"西撒哈拉",pinyin:"X"},{code:"+263",name:"辛巴威",pinyin:"X"},{code:"+687",name:"新喀里多尼亚",pinyin:"X"},{code:"+852",name:"香港",pinyin:"X"},{code:"+963",name:"叙利亚",pinyin:"X"},{code:"+30",name:"希腊",pinyin:"X"},{code:"+34",name:"西班牙",pinyin:"X"},{code:"+36",name:"匈牙利",pinyin:"X"},{code:"+64",name:"新西兰",pinyin:"X"},{code:"+65",name:"新加坡",pinyin:"X"}],Y:[{code:"+1-284",name:"英属维尔京群岛",pinyin:"Y"},{code:"+246",name:"英属印度洋领地",pinyin:"Y"},{code:"+251",name:"衣索比亚",pinyin:"Y"},{code:"+374",name:"亚美尼亚",pinyin:"Y"},{code:"+962",name:"约旦",pinyin:"Y"},{code:"+964",name:"伊拉克",pinyin:"Y"},{code:"+967",name:"叶门",pinyin:"Y"},{code:"+972",name:"以色列",pinyin:"Y"},{code:"+39",name:"义大利",pinyin:"Y"},{code:"+44",name:"英国",pinyin:"Y"},{code:"+62",name:"印尼",pinyin:"Y"},{code:"+84",name:"越南",pinyin:"Y"},{code:"+91",name:"印度",pinyin:"Y"},{code:"+98",name:"伊朗",pinyin:"Y"}],Z:[{code:"+235",name:"乍得",pinyin:"Z"},{code:"+236",name:"中非",pinyin:"Z"},{code:"+350",name:"直布罗陀",pinyin:"Z"},{code:"+850",name:"朝鲜民主主义人民共和国",pinyin:"Z"},{code:"+886",name:"中华民国",pinyin:"Z"},{code:"+56",name:"智利",pinyin:"Z"},{code:"+86",name:"中国",pinyin:"Z"}]},history:[],isShowRightText:!1,searchKey:"",indexOffsetTop:{},currentFixedIndicator:"A"}},created(){this.history=localStorage.getItem("locationSearchHistory")},mounted(){document.querySelectorAll(".index").forEach(i=>{this.indexOffsetTop[i.children[0].innerText]=i.offsetTop}),console.log(this.indexOffsetTop);let n=document.querySelectorAll(".item"),o=document.querySelector(".item:nth-child(2)").clientHeight,a=document.querySelector(".indicator"),y=a.offsetTop,t="scale(1)",s="rgb(143, 143, 158)";a.addEventListener("touchstart",i=>{let e=(i.touches[0].pageY-y)/o;e=Math.floor(e),d(e)}),a.addEventListener("touchmove",i=>{let e=(i.touches[0].pageY-y)/o;e=Math.floor(e),e>=0&&e<27&&d(e)}),a.addEventListener("touchend",function(){n.forEach(i=>{i.style.transform=`translate3d(0,0,0) ${t}`,i.style.color=s})});let d=i=>{let p="scale(1.2)";n[i].style.transform=`translate3d(${-o*4}px,0,0) ${p}`,n[i].style.color="#fff",this.goto(n[i]);for(let e=1;e<5;e++){let l=i+e,r=i-e;r>=0&&(e===4?(n[r].style.transform=`translate3d(0,0,0) ${t}`,n[r].style.color=s):(n[r].style.transform=`translate3d(${-o*(4-e)}px,0,0) ${p}`,n[r].style.color=`#ffffff${22*e}`)),l<27&&(e===4?(n[l].style.transform=`translate3d(0,0,0) ${t}`,n[l].style.color=s):(n[l].style.transform=`translate3d(${-o*(4-e)}px,0,0) ${p}`,n[l].style.color=`#ffffff${22*e}`))}}},computed:{},methods:{goto(m){let n=this.$refs.list;if(m.dataset.index)return n.scrollTop=0;let c=m.innerText;document.querySelector(`.${c}`)&&(n.scrollTop=document.querySelector(`.${c}`).offsetTop-100)},scroll(m){let n=m.target.scrollTop+110,c=null;for(const o in this.indexOffsetTop)this.indexOffsetTop[o]<n&&(c=o);this.currentFixedIndicator=c}}},S={class:"countryChoose"},B={class:"list"},V={key:0,class:"row no-active no-padding border index fixed"};function M(m,n,c,o,a,y){const t=Vue.resolveComponent("Search"),s=Vue.resolveComponent("base-header");return Vue.openBlock(),Vue.createElementBlock("div",S,[Vue.createVNode(s,null,{center:Vue.withCtx(()=>n[5]||(n[5]=[Vue.createTextVNode("切换城市")])),bottom:Vue.withCtx(()=>[Vue.createVNode(t,{isShowRightText:a.isShowRightText,rightText:"取消",onClick:n[0]||(n[0]=d=>a.isShowRightText=!0),onNotice:n[1]||(n[1]=d=>a.isShowRightText=!1),onClear:n[2]||(n[2]=d=>a.isShowRightText=!1),class:"ml2r mr2r mt1r",placeholder:"输入城市或区县名搜索",modelValue:a.searchKey,"onUpdate:modelValue":n[3]||(n[3]=d=>a.searchKey=d)},null,8,["isShowRightText","modelValue"])]),_:1}),Vue.createElementVNode("div",{ref:"list",class:"content",onScroll:n[4]||(n[4]=(...d)=>y.scroll&&y.scroll(...d))},[n[6]||(n[6]=Vue.createStaticVNode('<div class="row no-active no-padding" data-v-7a50ef70>默认位置</div><div class="row no-active border no-padding" data-v-7a50ef70>同城</div><div class="top" data-v-7a50ef70><div class="row no-active no-padding" data-v-7a50ef70>历史访问</div><div class="cities" data-v-7a50ef70><span class="city" data-v-7a50ef70>大连</span><span class="city" data-v-7a50ef70>深圳</span><span class="city" data-v-7a50ef70>北京</span><span class="city" data-v-7a50ef70>上海</span></div></div><div class="top" data-v-7a50ef70><div class="row no-active no-padding" data-v-7a50ef70>抖单热门城市</div><div class="cities" data-v-7a50ef70><span class="city" data-v-7a50ef70>深圳</span><span class="city" data-v-7a50ef70>北京</span><span class="city" data-v-7a50ef70>上海</span><span class="city" data-v-7a50ef70>成都</span><span class="city" data-v-7a50ef70>广州</span><span class="city" data-v-7a50ef70>重庆</span><span class="city" data-v-7a50ef70>西安</span><span class="city" data-v-7a50ef70>苏州</span><span class="city" data-v-7a50ef70>武汉</span><span class="city" data-v-7a50ef70>杭州</span><span class="city" data-v-7a50ef70>郑州</span><span class="city" data-v-7a50ef70>南京</span><span class="city" data-v-7a50ef70>合肥</span><span class="city" data-v-7a50ef70>长沙</span><span class="city" data-v-7a50ef70>福州</span></div></div>',4)),Vue.createElementVNode("div",B,[a.currentFixedIndicator?(Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createElementVNode("span",null,Vue.toDisplayString(a.currentFixedIndicator),1)])):Vue.createCommentVNode("",!0),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(a.countryOk,(d,i)=>(Vue.openBlock(),Vue.createElementBlock("div",{key:i},[Vue.createElementVNode("div",{class:Vue.normalizeClass([i,"row no-active no-padding border index"])},[Vue.createElementVNode("span",null,Vue.toDisplayString(i),1)],2),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(d,(p,e)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"row no-active no-padding border",key:e},[Vue.createElementVNode("span",null,Vue.toDisplayString(p.name),1)]))),128))]))),128))])],544),n[7]||(n[7]=Vue.createStaticVNode('<div class="indicator-ctn" data-v-7a50ef70><div class="indicator" data-v-7a50ef70><div class="item arrow" data-index="top" data-v-7a50ef70></div><div class="item" data-v-7a50ef70>A</div><div class="item" data-v-7a50ef70>B</div><div class="item" data-v-7a50ef70>C</div><div class="item" data-v-7a50ef70>D</div><div class="item" data-v-7a50ef70>E</div><div class="item" data-v-7a50ef70>F</div><div class="item" data-v-7a50ef70>G</div><div class="item" data-v-7a50ef70>H</div><div class="item" data-v-7a50ef70>I</div><div class="item" data-v-7a50ef70>J</div><div class="item" data-v-7a50ef70>K</div><div class="item" data-v-7a50ef70>L</div><div class="item" data-v-7a50ef70>M</div><div class="item" data-v-7a50ef70>N</div><div class="item" data-v-7a50ef70>O</div><div class="item" data-v-7a50ef70>P</div><div class="item" data-v-7a50ef70>Q</div><div class="item" data-v-7a50ef70>R</div><div class="item" data-v-7a50ef70>S</div><div class="item" data-v-7a50ef70>T</div><div class="item" data-v-7a50ef70>U</div><div class="item" data-v-7a50ef70>V</div><div class="item" data-v-7a50ef70>W</div><div class="item" data-v-7a50ef70>X</div><div class="item" data-v-7a50ef70>Y</div><div class="item" data-v-7a50ef70>Z</div></div></div>',1))])}const E=v(u,[["render",M],["__scopeId","data-v-7a50ef70"]]);export{E as default};
