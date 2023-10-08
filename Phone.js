// for pwa start
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration)
    }).catch(error => {
        console.log("Sw Registration failed!")
        console.log(error)
    })
}
// for pwa end


// কর্মকর্তা / কর্মচারীর নাম ও পদবী
// মোবাইল নম্বর

let contacts = [
    {
        sl: 1,
        name: "মোহসিনুর রহমান, উপাধ্যক্ষ ও অধ্যক্ষ(ভারপ্রাপ্ত)",
        engName: "Mohosinur Rahman, principle",
        phone: "01795925340",
    },
    {
        sl: 2,
        name: "মুহাম্মদ আমানুল্লাহ, চীফ ইনস্ট্রাক্টর(নন - টেক)।",
        engName: "Mohammed Amanullah",
        phone: "01713674300",
    },
    {
        sl: 3,
        name: "মুহাম্মদ মহিদ্দিন ইনস্ট্রাক্টর(টেক) ইলেকট্রিক্যাল",
        engName: "Mohammed Mohiuddin",
        phone: "01814766252",
    },
    {
        sl: 4,
        name: "হোসাইন মুহাম্মাদ রবি ইসলাম, ইনস্ট্রাক্টর(নন - টেক) পদার্থ",
        engName: "Hosain Mohammed robi hasan",
        phone: "01818380309",
    },
    {
        sl: 5,
        name: "শুভংকর পাল, ইনস্ট্রাক্টর(টেক) কম্পিউটার",
        engName: "Sovonkor poul",
        phone: "01675276591",
    },
    {
        sl: 6,
        name: "প্রভাস কান্তি দে, ইনস্ট্রাক্টর(টেক) কম্পিউটার",
        engName: "Provash kanti dey",
        phone: "01962823150",
    },
    {
        sl: 7,
        name: "গৌতম মুখ্য, ইনস্ট্রাক্টর(টেক) আরএসি",
        engName: "Gawtom mokkho",
        phone: "01748045850",
    },
    {
        sl: 8,
        name: "মোঃ ইয়াসিনুর রহমান, ইনস্ট্রাক্টর(টেক) আরএসি",
        engName: "md yasinur rahman",
        phone: "61845897548",
    },
    {
        sl: 9,
        name: "সেলিম রেজা, ইনস্ট্রাক্টর(টেক) ফুড",
        engName: "selim reja",
        phone: "01737918900",
    },
    {
        sl: 10,
        name: "মোঃ জামশেদুল কবির, ইনস্ট্রাক্টর(নন - টেক) বাংলা",
        engName: "md jamsedul karim",
        phone: "01997155988",
    },
    {
        sl: 11,
        name: "আব্দুল্লাহ আল - মামুন, ইনস্ট্রাক্টর(নন - টেক) পদার্থ বিজ্ঞান",
        engName: "abdullah al mamun",
        phone: "01948304050",
    },
    {
        sl: 12,
        name: "মোঃ আমিনুল, জুনিয়র ইনস্ট্রাক্টর(টেক) সিভিল",
        engName: "md aminul",
        phone: "01717545728",
    },
    {
        sl: 13,
        name: "মুহাঃ জাহেদুল ইসলাম, জুনিয়র ইনস্ট্রাক্টর(টেক) সিভিল",
        engName: "md jahedul islam",
        phone: "01720371779",
    },
    {
        sl: 14,
        name: "দেলোয়ার হোছাইন, জুনিয়র ইনস্ট্রাক্টর(নন - টেক) সমাজ বিজ্ঞান",
        engName: "Delwar hosain",
        phone: "01812368482",
    },
    {
        sl: 15,
        name: "হারুন অর রশিদ, জুনিয়র ইনস্ট্রাক্টর(নন - টেক) হিসাব বিজ্ঞান",
        engName: "Harun ar rasid",
        phone: "01933435258",
    },
    {
        sl: 16,
        name: "মুহাম্মদ মিফতাহ উদ্দিন, জুনিয়র ইনস্ট্রাক্টর(নন - টেক) গণিত",
        engName: "mohammed miftah uddin",
        phone: "01835560087",
    },
    {
        sl: 17,
        name: "মোঃ তৌহিদুর রহমান খান, জুনিয়র ইনস্ট্রাক্টর(টেক) ফুড",
        engName: "md towhidur rahman khan",
        phone: "01934210356",
    },
    {
        sl: 18,
        name: "আতিকুর রহমান, জুনিয়র ইনস্ট্রাক্টর(টেক) আরএসি",
        engName: "Atikur rahman",
        phone: "01823153326",
    },
    {
        sl: 19,
        name: "এ.এস.এম.মাঈন উদ্দিন খান, ইনস্ট্রাক্টর(সিভিল)",
        engName: "a.s.m.main uddin khan",
        phone: "01717025920",
    },
    {
        sl: 20,
        name: "রকি চৌধুরী, ইনস্ট্রাক্টর(আরএসি)",
        engName: "roky chowdhory",
        phone: "01814784600",
    },
    {
        sl: 21,
        name: "আরিফুল করিম, ইনস্ট্রাক্টর(ফুড)",
        engName: "ariful karim",
        phone: "01925244234",
    },
    {
        sl: 22,
        name: "কাজী সারোয়ার, ইনস্ট্রাক্টর(ফুড)",
        engName: "kaji sorwar",
        phone: "01723789744",
    },
    {
        sl: 23,
        name: "আলমগীর মিয়া, ইনস্ট্রাক্টর(সিভিল)",
        engName: "alomgir miya",
        phone: "01673132628",
    },
    {
        sl: 24,
        name: "মোঃ ফাইজুল ইসলাম, ইনস্ট্রাক্টর(সিভিল)",
        engName: "faizul islam",
        phone: "01911272347",
    },
    {
        sl: 25,
        name: "মোঃ মাসুদ রানা, ইনস্ট্রাক্টর(কম্পিউটার)",
        engName: "md masud rana",
        phone: "01719508316",
    },
    {
        sl: 26,
        name: "মোঃ এমদাদুল হক, ইনস্ট্রাক্টর(নন - টেক)",
        engName: "md aldadul haque",
        phone: "01734048169",
    },
    {
        sl: 27,
        name: "মোঃ আব্দুল আলীম, ইনস্ট্রাক্টর(নন - টেক)",
        engName: "md abdul alim",
        phone: "01734598154",
    },
    {
        sl: 28,
        name: "আহমেদ রফিক আজিজ, ইনস্ট্রাক্টর(কম্পিউটার)",
        engName: "ahmed rafiq aziz",
        phone: "01721153960",
    },
    // Page2
    {
        sl: 29,
        name: "কাজী মোঃ ফখরুল আলম, জুনিয়র ইনস্ট্রাক্টর (আরএসি)",
        engName: "kaji md fakrul alam",
        phone: "01820191707"
    },
    {
        sl: 30,
        name: "মেহেদী হাসান, জুনিয়র ইনস্ট্রাক্টর (ফুড)",
        engName: "mehedi hasan",
        phone: "01840013761"
    },
    {
        sl: 31,
        name: "মোঃ নেছার উদ্দিন, জুনিয়র ইনস্ট্রাক্টর (ফুড)",
        engName: "md nesar uddin",
        phone: "01828700803"
    },
    {
        sl: 32,
        name: "শরিফুল ইসলাম, জুনিয়র ইনস্ট্রাক্টর (কম্পিউটার)",
        engName: "sariful islam",
        phone: "01723906133"
    },
    {
        sl: 33,
        name: "শরিফুল ইসলাম, জুনিয়র ইনস্ট্রাক্টর (কম্পিউটার)",
        engName: "sariful islam",
        phone: "01739941273"
    },
    {
        sl: 34,
        name: "মোঃ আবু জাহিদ, জুনিয়র ইনস্ট্রাক্টর (আরএসি)",
        engName: "md abu jahid",
        phone: "01723079651"
    },
    {
        sl: 35,
        name: "মোঃ মামুনুর রশীদ, জুনিয়র ইনস্ট্রাক্টর (নন-টেক)",
        engName: "md mamunur rasid",
        phone: "01737322532"
    },
    {
        sl: 36,
        name: "মোঃ আব্দুল মতিন, জুনিয়র ইনস্ট্রাক্টর (নন-টেক)",
        engName: "md abdul motin",
        phone: "01737191044"
    },
    // Extra ==============
    {
        sl: 101,
        name: "ফয়সাল বিন নুর, গেস্ট ইনস্ট্রাক্টর (কম্পিউটার)",
        engName: "Foysal Bin Nour faisal",
        phone: "01850159531",
    },
    {
        sl: 102,
        name: "মো: আরমান, গেস্ট ইনস্ট্রাক্টর (কম্পিউটার)",
        engName: "MD Arman",
        phone: "01614173289",
    },
    {
        sl: 103,
        name: "মো: মোজাহিদুল ইসলাম, গেস্ট ইনস্ট্রাক্টর (ইটি)",
        engName: "MD Mojahid",
        phone: "01648944623",
    },
    {
        sl: 104,
        name: "শেখ ফরিদ উদ্দিন উদ্দিন ফাহাদ, গেস্ট ইনস্ট্রাক্টর (টুরিসম)",
        engName: "Shakh Farid Uddin Fahad",
        phone: "01636847798",
    },

    // Extra ==============
    {
        sl: 37,
        name: "মোঃ সাইফুল ইসলাম, ক্রাফট ইনস্ট্রাক্টর (টিআর) সিভিল",
        engName: "md saiful islam, craft",
        phone: "01816382217"
    },
    {
        sl: 38,
        name: "মোঃ মনিরুজ্জামান, ক্রাফট ইনস্ট্যান্টর (সপ) আরএসি",
        engName: "md monirujjaman",
        phone: "01756434228"
    },
    {
        sl: 39,
        name: "মোশারফ হোছাইন, ল্যাব সহকারী",
        engName: "mosharaf hossain, lab assistant",
        phone: "01812368299"
    },
    {
        sl: 40,
        name: "মোঃ মহসিন, ক্রাফট ইনস্ট্রাক্টর (টিআর) সিভিল",
        engName: "md mohsin craft",
        phone: "01812023499"
    },
    {
        sl: 41,
        name: "প্রলয় কান্তি সুশীল, ক্রাফট ইনস্ট্রাক্টর (সপ) সিভিল",
        engName: "proloy kanti sosil craft",
        phone: "01306276981"
    },
    {
        sl: 42,
        name: "মোঃ আবু হানিফ, ক্রাফট ইনস্ট্রাক্টর (সপ) সিভিল",
        engName: "md abu hanif craft",
        phone: "01820050020"
    },
    {
        sl: 43,
        name: "আনিসুজ্জামান রোমান, ক্রাফট ইনস্ট্রাক্টর (সপ) সিভিল",
        engName: "anisujjaman craft",
        phone: "01722930979"
    },
    {
        sl: 44,
        name: "মোঃ জাহাঙ্গীর শাহ তালুকদার, ক্রাফট ইনস্ট্রাক্টর (সেপ) সিভিল",
        engName: "md jahangir saha talokdar craft",
        phone: "01853048330"
    },
    {
        sl: 45,
        name: "আল হাসনাত রেজায়ে রাত্রী, ক্রাফট ইনস্ট্রাক্টর (সপ) কম্পিউটার",
        engName: "al hasnat rejaiye ratri craft",
        phone: "01521485017"
    },
    {
        sl: 46,
        name: "রিপন কান্তি সুশীল, ক্রাফট ইনস্ট্রাক্টর (সপ) কম্পিউটার",
        engName: "ripon kanti sosil craft",
        phone: "01955033521"
    },
    {
        sl: 47,
        name: "লোকনাথ চন্দ্র গোলদার, ক্রাফট ইনস্ট্রাক্টর (সপ) কম্পিউটার",
        engName: "Loknat chondro craft",
        phone: "01918675924"
    },
    {
        sl: 48,
        name: "মোঃ ইফতেখার হোসেন, ক্রাফট ইনস্ট্রাক্টর (সপ) কম্পিউটার",
        engName: "md iftekar hossain craft",
        phone: "01674475775"
    },
    {
        sl: 49,
        name: "শুভ চৌধুরী, ক্রাফট ইনস্ট্রাক্টর (সপ) আরএসি",
        engName: "sovo chy craft",
        phone: "01830108278"
    },
    {
        sl: 50,
        name: "মোঃ আব্দুল মান্নান, ক্রাফট ইনস্ট্রাক্টর (সপ) আরএসি)",
        engName: "md abdul mannan craft",
        phone: "01521408861"
    },
    {
        sl: 51,
        name: "এস.এম. কিবরিয়া, ক্রাফট ইনস্ট্রাক্টর (সপ) ফুড",
        engName: "s.m kibria craft",
        phone: "01829446290"
    },
    {
        sl: 52,
        name: "নুর মোহাম্মদ, ক্রাফট ইনস্ট্রাক্টর (সপ) যুক্ত",
        engName: "nur mohammed noor craft",
        phone: "01813095885"
    },
    {
        sl: 53,
        name: "সারোয়ার হোসেন রাহী, ফ্রাফট ইনস্ট্রাক্টর (সপ) ট্যুরিজম",
        engName: "sarwar hosen ratri",
        phone: "01905242098"
    },
    {
        sl: 54,
        name: "রাধী চক্রবর্তী, ক্রাফট ইনস্ট্রাক্টর (সপ) ট্যুরিজম",
        engName: "radhi chakroborti",
        phone: "01521554266"
    },
    {
        sl: 55,
        name: "মোঃ ফরিদ উদ্দিন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "md forid uddin craft",
        phone: "01853435654"
    },
    {
        sl: 56,
        name: "আবছার উদ্দিন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "absar uddin craft",
        phone: "01741100800"
    },
    {
        sl: 57,
        name: "ইকবাল বাহার, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "ikbal bahar ekbal craft",
        phone: "01832172517"
    },
    {
        sl: 58,
        name: "মোহাম্মদ ফখরুল ইসলাম, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "mohammed khairul islam craft",
        phone: "01626342025"
    },
    {
        sl: 59,
        name: "মোঃ শরীফুল ইসলাম, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) সিভিল",
        engName: "Md soriful islam craft",
        phone: "01930858985"
    },
    {
        sl: 60,
        name: "জুয়েল পারভেজ, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) কম্পিউটার",
        engName: "jowel parves craft",
        phone: "01916519959"
    },

    // Page3
    {
        sl: 61,
        name: "মোঃ বিল্লাল হোসেন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) কম্পিউটার",
        engName: "md billal hossen craft",
        phone: "01521102474",
    },
    {
        sl: 62,
        name: "আরিফুল হক, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) কম্পিউটার",
        engName: "ariful haque craft",
        phone: "01915155325",
    },
    {
        sl: 63,
        name: "মোঃ কামাল উদ্দিন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) আরএসি",
        engName: "md kamal uddin craft",
        phone: "01823311832",
    },
    {
        sl: 64,
        name: "হিমিকা বড়ুয়া, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) আরএসি",
        engName: "himika bodua craft",
        phone: "01965789105",
    },
    {
        sl: 65,
        name: "ছৈয়াদা হুমায়ারা, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) আরএসি",
        engName: "chaiyeda homaira humaira craft",
        phone: "01832064361",
    },
    {
        sl: 66,
        name: "অপরাজিতা দত্ত, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) আরএসি",
        engName: "oporajita datt craft ",
        phone: "01849214461",
    },
    {
        sl: 67,
        name: "সুজন চন্দ্র দাস, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) ফুড",
        engName: "sojon sujon chondro das craft",
        phone: "01521484506",
    },
    {
        sl: 68,
        name: "মোঃ সাইফুল্লাহ জামান, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) ফুড",
        engName: "md saifullah jaman craft",
        phone: "01538118053",
    },
    {
        sl: 69,
        name: "মোঃ রবিউল হোসেন, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) ফুড",
        engName: "md robiul hosen craft",
        phone: "01818308662",
    },
    {
        sl: 70,
        name: "বিজয় ত্রিপুরা, ক্রাফট ইনস্ট্রাক্টর (টিআর/ইলেকট্রনিক্স/টেক) ট্যুরিজম",
        engName: "bijoy tripora craft",
        phone: "01517113273",
    },
    {
        sl: 71,
        name: "মোহাঃ মাসুদুর রহমান, স্টোর কিপার",
        engName: "md masudur rahman, store keeper",
        phone: "01720932626",
    },
    {
        sl: 72,
        name: "মোহাম্মদ আলমগীর হোসেন, ডাটা প্রসেসর",
        engName: "mohammed alamgir hosen data processor",
        phone: "01555047503",
    },
    {
        sl: 73,
        name: "মোহাম্মদ হারুন-অর-রশীদ, ডাটা প্রসেসর",
        engName: "mohammed harun ar rasid rashid",
        phone: "01816130186",
    },
    {
        sl: 74,
        name: "মোহাম্মদ মেহেদী হাসান, হিসাব সহকারী",
        engName: "mohammed mehedi hasan",
        phone: "01845581302",
    },
    {
        sl: 75,
        name: "মোঃ শারাফ তালুকদার সুজন, ল্যাবরেটরী সহকারী (বিজ্ঞান)",
        engName: "MD Saraf Talukdar",
        phone: "01608848008",
    },
    {
        sl: 76,
        name: "আবদুল মান্নান, সিকিউরিটি গার্ড",
        engName: "Abdul Manan",
        phone: "01812368622",
    },
    {
        sl: 77,
        name: "উহ্লা মং মারমা, সিকিউরিটি গার্ড",
        engName: "La La Mong marma",
        phone: "01734092171",
    },
    {
        sl: 78,
        name: "এন্ড্রু ত্রিপুরা, সিকিউরিটি গার্ড",
        engName: "andro tripura endrpo security guard",
        phone: "01556743557",
    },
    {
        sl: 79,
        name: "মুহাম্মদ জকরিয়া, ক্লিনার",
        engName: "md jokoriya, cleanner",
        phone: "01815674073",
    },
    {
        sl: 80,
        name: "মোঃ জহিরুল ইসলাম, ক্লিনার",
        engName: "md johirul islam, cleanner",
        phone: "01722543623",
    },
    {
        sl: 81,
        name: "মুহুঃ খুরশেদুল আলম, ক্লিনার",
        engName: "md Khursed alom cleaner",
        phone: "01875512154",
    },
    {
        sl: 82,
        name: "সবুজ বড়ুয়া, ক্লিনার",
        engName: "sabuj bodua, cleanner",
        phone: "01813590587",
    },
    {
        sl: 83,
        name: "অরুন চন্দ্র দাস, সুইপার",
        engName: "arun chandro das",
        phone: "01814855325",
    },
    {
        sl: 84,
        name: "সাগর মল্লিক, সুইপার",
        engName: "sagor mollik seipper",
        phone: "01866352955",
    },
    {
        sl: 85,
        name: "আজিজুল হক, খন্ডকালীন ড্রাইভার",
        engName: "ajijul haque driver",
        phone: "01887231434",
    },
    {
        sl: 86,
        name: "মোঃ তাজিম, খণ্ডকালীন ডাটা প্রসেসর",
        engName: "md tajim data processor",
        phone: "01825708840",
    },
    {
        sl: 87,
        name: "মোঃ জাফরুল ইসলাম, খণ্ডকালীন ক্লিনার",
        engName: "md jaforul islam",
        phone: "01815438816",
    },
    {
        sl: 88,
        name: "মোঃ ইসমাইল, খন্ডকালীন মালী",
        engName: "md ismail",
        phone: "01875514674",
    },
    {
        sl: 89,
        name: "ছালামত উল্লাহ, খন্ডকালীন সিকিউরিটি গার্ড",
        engName: "salamot ullah security guard",
        phone: "01836458211",
    },
    {
        sl: 90,
        name: "মোঃ শরিফ, খন্ডকালীন সিকিউরিটি গার্ড",
        engName: "md sharif security guard",
        phone: "01823467452",
    },
    {
        sl: 91,
        name: "বিপ্লব মলিক . খন্ডকালীন সইপার",
        engName: "Biplob mollik swipper",
        phone: "01884142046",
    },

];

let displayFilteredContacts = (filteredContacts) => {
    let contactsDiv = document.querySelector(".contacts");
    contactsDiv.innerHTML = ""; // Clear existing contacts

    filteredContacts.forEach(element => {
        let newContact = document.createElement('a')
        newContact.classList.add("contact")
        newContact.href = `tel:${element.phone}`
        newContact.innerHTML = `
        <div class="icon"><i class="fa-solid fa-phone"></i></div>
        <div>
            <h3>${element.name}</h3>
            <p>call ${element.phone}</p>
        </div>`

        contactsDiv.appendChild(newContact);
    });
}

// Add event listener to search input
document.getElementById("searchInput").addEventListener("input", function () {
    let searchTerm = this.value.trim().toLowerCase();
    if (searchTerm === "") {
        // If search input is empty, display all contacts
        displayFilteredContacts(contacts);
    } else {
        // Filter contacts based on search term
        let filteredContacts = contacts.filter(contact => {
            return (contact.name + contact.engName).toLowerCase().includes(searchTerm);
        });

        displayFilteredContacts(filteredContacts);
    }
});

// Initial display of all contacts
displayFilteredContacts(contacts);