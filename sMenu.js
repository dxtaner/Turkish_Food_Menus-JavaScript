function initializePageFromMenu(menu) {
  createButtonsFromMenu(menu);
  displayMenuItems(menu);
}

function displayMenuItems(menu, filter = "Tümü") {
  const filteredMenu = menu.filter((menuItem) =>
    filter === "Tümü" ? true : filter === menuItem.category
  );
  const menuItemElements = createMenuItemElements(filteredMenu);
  const sectionCenter = document.querySelector(".section-center.row");

  sectionCenter.innerHTML = "";

  menuItemElements.forEach((menuItem) => {
    sectionCenter.appendChild(menuItem);
  });
}

function createMenuItemElements(menu, filter) {
  const menuItemElements = menu.map((menuItem) => {
    const menuItemDisplay = document.createElement("div");
    menuItemDisplay.classList.add("menu-items");
    menuItemDisplay.classList.add("col-lg-6");
    menuItemDisplay.classList.add("col-sm-12");

    menuItemDisplay.appendChild(createMenuItemImage(menuItem));
    menuItemDisplay.appendChild(createMenuItemInfo(menuItem));

    return menuItemDisplay;
  });

  return menuItemElements;
}

function createMenuItemInfo(menuItem) {
  const menuItemInfo = document.createElement("div");

  menuItemInfo.classList.add("menu-info");

  menuItemInfo.appendChild(createMenuItemTitle(menuItem));
  menuItemInfo.appendChild(createMenuItemText(menuItem));

  return menuItemInfo;
}

function createMenuItemTitle(menuItem) {
  const menuItemTitle = document.createElement("div");

  menuItemTitle.classList.add("menu-title");

  const menuItemTitleName = document.createElement("h4");
  menuItemTitleName.textContent = menuItem.title;

  const menuItemTitlePrice = document.createElement("h4");
  menuItemTitlePrice.textContent = menuItem.price;
  menuItemTitlePrice.classList.add("price");

  menuItemTitle.appendChild(menuItemTitleName);
  menuItemTitle.appendChild(menuItemTitlePrice);

  return menuItemTitle;
}

function createMenuItemText(menuItem) {
  const menuItemText = document.createElement("div");
  menuItemText.textContent = menuItem.desc;
  menuItemText.classList.add("menu-text");

  return menuItemText;
}

function createMenuItemImage(menuItem) {
  const menuItemImage = document.createElement("img");

  menuItemImage.src = menuItem.img;
  menuItemImage.alt = menuItem.title;
  menuItemImage.classList.add("photo");

  return menuItemImage;
}

function createButtonsFromMenu(menu) {
  const buttonContainer = document.querySelector("div.btn-container");

  const uniqueCategories = getCategoriesFromMenu(menu);

  uniqueCategories.forEach((category) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-outline-primary");
    button.classList.add("btn-item");
    button.textContent = category;

    addButtonEventListener(button, menu);
    buttonContainer.appendChild(button);

  });
}

function addButtonEventListener(buttonElement, menu) {
  buttonElement.addEventListener("click", function () {
    const filter = buttonElement.textContent;
    displayMenuItems(menu, filter);
  });
}

function getCategoriesFromMenu(menu) {
  const categories = [];

  const uniqueCategories = new Set(menu.map((menuItem) => menuItem.category));

  categories.push("Tümü");
  categories.push(...uniqueCategories);

  return categories;
}

const menu = [
  {
    id: 1,
    title: "Düğün Çorbası",
    category: "Osmanlı Saray Mutfağı",
    price: "11.99 tl",
    img: "https://cdn.yemek.com/uploads/2017/02/dugun-corbasi-tarifi-one-cikan-yeni.jpg",
    desc: `Osmanlı mutfağına ait ve hala günümüzde en sık yapılan çorba tariflerinden biri düğün çorbası.
    Osmanlı mutfağının ete düşkünlüğünü de özetleyen bu çorbada gerdan eti kullanılıyor.`,
  },
  {
    id: 2,
    title: "Ali Nazik",
    category: "Türk Mutfağında Et Yemekleri",
    price: "17.50 tl",
    img: "https://cdn.yemek.com/mncrop/940/625/uploads/2017/05/alinazik-tarifi.jpg",
    desc: `Alinazik, patlıcan ve et ile yapılan bir ana yemektir. Türk mutfağına ait olup genelde Gaziantep'e mâledilir.`,
  },
  {
    id: 3,
    title: "Patlıcan Pilavi",
    category: "Osmanlı Saray Mutfağı",
    price: "21.00 tl",
    img: "https://cdn.yemek.com/uploads/2016/03/patlicanli-pilav-tarifi.jpg",
    desc: `Dilim dilim kesilmiş patlıcanlarla taçlanan, baharatlarla lezzetlendirilen bir lezzet patlıcanlı pilav.`,
  },
  {
    id: 4,
    title: "Tas Kebabı",
    category: "Türk Mutfağında Et Yemekleri",
    price: "25.99 tl",
    img: "https://cdn.yemek.com/mncrop/940/625/uploads/2014/10/tas-kebabi-yemekcom.jpg",
    desc: `Suyuna ekmek banılacak yemekleri sevenler ve etten vazgeçemeyenler için bir klasiktir tas kebabı tarifi. 
    Olmazsa olmazı dana eti, soğan ve suyuna lezzet veren salçadır.`,
  },
  {
    id: 5,
    title: "Yağlaş - Giresun",
    category: "Yöresel Lezzetler",
    price: "9.50 tl",
    img: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/yaglas-35831.jpeg",
    desc: `Karadeniz bölgesinde kahvaltıların vazgeçilmez lezzetli kuymak Giresun’da daha farklı yapılıyor. Mısır unu, tereyağı kavuruluyor
     ancak içerisine peynir katılmıyor. Üzerine kırmızı biberle yağ yakılıyor.`,
  },
  {
    id: 6,
    title: "Zeytinyağlı Yaprak Sarma",
    category: "Zeytinyağlı Türk Yemekleri",
    price: "12.00 tl",
    img: "https://iasbh.tmgrup.com.tr/23d96a/812/467/0/495/1024/1084?u=http://i.tmgrup.com.tr/sfr/arsiv/2010/10/20/Orjinal/458139669727.jpg",
    desc: `Rice Sandwich, serving witAsma yaprağının içerisine bulgur ya da pirinç başta olmak üzere yöresine göre değişen diğer iç malzemeleri konarak yapılan bir yemektir. 
    Zeytinyağlı sarma ya da kıymalı sarma şeklinde farklı çeşitleri vardır.`,
  },
  {
    id: 7,
    title: "Zeytinyağlı Kuru Fasulye",
    category: "Zeytinyağlı Türk Yemekleri",
    price: "15.00 tl",
    img: "https://cdn.yemek.com/mncrop/940/625/uploads/2017/09/zeytinyagli-kuru-fasulye-tarifi-1.jpg",
    desc: `Zeytinyağlı kuru fasulye, Türk mutfağının sevilen ve sık yapılan yemeklerinden biridir.Bol bol domates ve soğanla pişirilir ve genellikle pilavla birlikte servis edilir.`,
  },
  {
    id: 8,
    title: "Zeytinyağlı Barbunya Pilaki",
    category: "Zeytinyağlı Türk Yemekleri",
    price: "18.00 tl",
    img: "https://i4.hurimg.com/i/hurriyet/75/750x422/5f87da37d3806c0b9cf1b3f3.jpg",
    desc: `Zeytinyağlı barbunya pilaki, barbunyanın bol baharat ve zeytinyağıyla pişirilerek yapılan bir yemeğidir.Limonla servis edilir ve lezzeti çok beğenilir.`,
  },
  {
    id: 9,
    title: "Zeytinyağlı İmam Bayıldı",
    category: "Zeytinyağlı Türk Yemekleri",
    price: "20.00 tl",
    img: "https://i4.hurimg.com/i/hurriyet/75/750x422/5ebe8c880f254414f09340c5.jpg",
    desc: `Zeytinyağlı imam bayıldı, patlıcan ve soğanın bol baharat ve zeytinyağı ile birlikte pişirilmesiyle yapılan bir yemektir.İsmini, ilk kez bu yemeği yediğinde kendisinden geçen bir imamdan almıştır.`,
  },
  {
    id: 10,
    title: "Lalanga",
    category: "Osmanlı Saray Mutfağı",
    price: "15.00 tl",
    img: "https://cdn.yemek.com/uploads/2018/06/lalanga-tarifi.jpg",
    desc: `Hafta sonları sabah kahvaltılarınız için farklı lezzetler arıyorsanız lalanga tarifi kesinlikle 
    denemeniz gereken bir tarif.`,
  },
  {
    id: 11,
    title: "Biber Dolması",
    category: "Zeytinyağlı Türk Yemekleri",
    price: 12.99,
    img: "https://cdn.yemek.com/mncrop/940/625/uploads/2015/09/zeytinyagli-biber-dolmasi-yemekcom.jpg",
    desc: `Zeytinyağlı kontenjanının öne çıkan yemeği, kalabalık sofraların vazgeçilmezdir.`,
  },
  {
    id: 12,
    title: "Karnıyarık",
    category: "Zeytinyağlı Türk Yemekleri",
    price: "13.99 tl",
    img: "https://iasbh.tmgrup.com.tr/aa154d/812/467/0/815/1024/1405?u=http://i.tmgrup.com.tr/sfr/arsiv/2010/07/14/Orjinal/573368182202.jpg",
    desc: `Karnıyarık Türk mutfağının belli başlı patlıcan yemeklerinden biridir. Hazırlanırken ana malzeme olan patlıcanın dışında soğan,
     biber, domates ve kıyma da kullanılır.`,
  },
  {
    id: 13,
    title: "Keşkül Tatlısı",
    category: "Osmanlı Saray Mutfağı",
    price: "8.99 tl",
    img: "https://cdn.yemek.com/uploads/2019/03/gercek-keskul-tarifi.jpg",
    desc: `Geleneksel sütlü tatlılarımızın en sevilenlerinden keşkülün yapımı Osmanlı'dan bu yana biraz değişime uğramış durumda.
     Bu orijinal keşkül tarifinde örneğin un ya da nişasta yok; bolca badem var.`,
  },
  {
    id: 14,
    title: "Meftune – Diyarbakır",
    category: "Yöresel Lezzetler",
    price: "19.25 tl",
    img: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/meftune-35836.jpeg",
    desc: `Patlıcan, biber, domatesler bolca sumak eşliğinde pişirilir. Etli ya da etkisi iki türlüsü de yapılır.`,
  },
  {
    id: 15,
    title: "Bamya çorbası – Konya",
    category: "Yöresel Lezzetler",
    price: "22.25 tl",
    img: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/bamyacorbasi-35838.jpeg",
    desc: `Bamya çorbası. Klasik bamyadan farkı bamyaların çok küçük olması ve çorba gibi daha sulu yapılması.`,
  },
  {
    id: 16,
    title: "Bursa İskender Kebabı",
    category: "Yöresel Lezzetler",
    price: "35.50 tl",
    img: "https://cdn.yemek.com/mncrop/940/625/uploads/2014/09/iskender-kebap-tarifi-500x333.jpg",
    desc: `Bursa'nın meşhur İskender kebabı, döner kebabının bir çeşididir. Etin üzerine tereyağlı domates sosu dökülerek servis edilir.`,
  },
  {
    id: 17,
    title: "Adana Kebap",
    category: "Yöresel Lezzetler",
    price: "28.00 tl",
    img: "https://i.lezzet.com.tr/images-xxlarge-recipe/adana-kebabi-a95144f8-b2ee-4da1-b00a-a819010eb15f.jpg",
    desc: `Adana'nın meşhur kebabı, baharatlı kıyma etinin şişe dizilmesiyle hazırlanır. Genellikle lavaş ekmeği, domates, biber ve soğanla servis edilir.`,
  },
  {
    id: 18,
    title: "İzmir Köfte",
    category: "Yöresel Lezzetler",
    price: "18.50 tl",
    img: "https://cdn.yemek.com/mnresize/940/940/uploads/2017/08/izmir-kofte-tarifi.jpg",
    desc: `İzmir'in meşhur köftesi, kıyma eti, soğan, sarımsak, maydanoz, yumurta ve baharatlarla hazırlanır. Genellikle domates, biber ve patatesle servis edilir.`,
  },
  {
    id: 19,
    title: "Antep Baklavası",
    category: "Tatlılar",
    price: "45.00 tl",
    img: "https://cdn.yemek.com/mnresize/940/940/uploads/2014/12/baklava-tarifi.jpg",
    desc: `Antep'in meşhur tatlısı, ince hamurla hazırlanan cevizli şerbetli bir tatlıdır. Üzerine Antep fıstığı serpilerek servis edilir.`,
  },
  {
    id: 20,
    title: "İstanbul Uskumru Köftesi",
    category: "Yöresel Lezzetler",
    price: "28.75 tl",
    img: "https://cdn.yemek.com/mnresize/940/940/uploads/2015/06/uskumru-koftesi-tarifi.jpg",
    desc: `İstanbul'un meşhur balık köftesi, uskumru balığı, patates, soğan, maydanoz, baharatlar ve galeta unuyla hazırlanır. Genellikle limon ve roka ile servis edilir.`,
  },
  {
    id: 21,
    title: "Hünkar Beğendi",
    category: "Osmanlı Saray Mutfağı",
    price: "35.50 tl",
    img: "https://i.lezzet.com.tr/images-xxlarge-recipe/hunkar-begendi-afdf7bda-369c-4d8d-9d2a-62817ddc1403.jpg",
    desc: `Osmanlı Sarayı'nın ünlü yemeklerinden Hünkar Beğendi, kuzu eti ile hazırlanan bir yemektir. Üzeri beşamel soslu patlıcan püresi ile kaplanır.`,
  },
  {
    id: 22,
    title: "Çerkez Tavuğu",
    category: "Osmanlı Saray Mutfağı",
    price: "32.00 tl",
    img: "https://i.ytimg.com/vi/0oGzal8ldfs/maxresdefault.jpg",
    desc: `Osmanlı Sarayı'nın özel yemeklerinden Çerkez Tavuğu, haşlanmış tavuk eti, ceviz, sarımsak, tahin ve baharatların karışımıyla hazırlanır. Genellikle maydanoz ve nar ekşisi ile servis edilir.`,
  },
  {
    id: 23,
    title: "Muhallebi",
    category: "Osmanlı Saray Mutfağı",
    price: "15.00 tl",
    img: "https://i.ytimg.com/vi/KNYvEwpP41Y/maxresdefault.jpg",
    desc: `Osmanlı Sarayı'nın en sevilen tatlılarından biri olan Muhallebi, süt, nişasta, şeker ve vanilya ile hazırlanan bir tür pudingdir. Genellikle üzerine tarçın serpilerek servis edilir.`,
  },
  {
    id: 31,
    title: "Adana Kebap",
    category: "Türk Mutfağında Et Yemekleri",
    price: "28.00 tl",
    img: "https://i.ytimg.com/vi/Ld7JY1D8uSg/maxresdefault.jpg",
    desc: `Adana Kebap, baharatlı kıyma etinin şişe takılarak mangalda pişirilmesiyle hazırlanan bir Türk mutfağı klasiğidir. Genellikle lavaş ekmeği, domates, biber ve soğanla servis edilir.`,
  },
  {
    id: 32,
    title: "İskender Kebap",
    category: "Türk Mutfağında Et Yemekleri",
    price: "30.00 tl",
    img: "https://i.ytimg.com/vi/4Uzm-47pAV0/maxresdefault.jpg",
    desc: `İskender Kebap, döner kebabın üzerine tereyağı ve domates sosu ile servis edilmesiyle hazırlanan bir yemektir. Genellikle yoğurtlu ve salçalı bir sosla servis edilir.`,
  },
  {
    id: 33,
    title: "Sivas Kangal Mantısı",
    category: "Türk Mutfağında Et Yemekleri",
    price: "25.00 tl",
    img: "https://i.ytimg.com/vi/BmJtMbdmCSc/maxresdefault.jpg",
    desc: `Sivas Kangal Mantısı, Türk mutfağının en özel mantı çeşitlerinden biridir. Küçük boyutta hazırlanan mantıların içi kıyma ve soğanla doldurulur ve üzerine yoğurt, tereyağı ve baharatlı sos dökülür.`,
  },
  {
    id: 34,
    title: "Kuzu Tandır",
    category: "Türk Mutfağında Et Yemekleri",
    price: "40.00 tl",
    img: "https://i.ytimg.com/vi/QEZwRDQuTtQ/maxresdefault.jpg",
    desc: `Kuzu tandır, tandır fırınında uzun saatler pişirilen kuzu etinin özel baharatlarla lezzetlendirilerek servis edilmesiyle hazırlanan bir yemektir. Genellikle pilav ve salata ile servis edilir.`,
  },
  {
    id: 35,
    title: "Ciğer Tava",
    category: "Türk Mutfağında Et Yemekleri",
    price: "22.00 tl",
    img: "https://i.ytimg.com/vi/MbfyXYFg9nM/maxresdefault.jpg",
    desc: `Ciğer Tava, tavada kızartılmış ciğerin soğan ve baharatlarla lezzetlendirilerek servis edilmesiyle hazırlanan bir yemektir. Genellikle sıcak olarak servis edilir.`,
  },
  {
    id: 36,
    title: "Baklava",
    category: "Tatlılar",
    price: "35.00 tl",
    img: "https://i.ytimg.com/vi/33HT1jpMwI8/maxresdefault.jpg",
    desc: `Baklava, yufkaların arasına ceviz veya fıstık gibi malzemelerin konulması ve şerbetlenmesiyle hazırlanan geleneksel bir Türk tatlısıdır. Çok katmanlı olması ve şerbetli olmasıyla öne çıkar.`,
  },
  {
    id: 37,
    title: "Sütlaç",
    category: "Tatlılar",
    price: "10.00 tl",
    img: "https://i.ytimg.com/vi/x6XKXHKyHIs/maxresdefault.jpg",
    desc: `Sütlaç, pirinç, süt, şeker ve vanilyanın pişirilerek hazırlanmasıyla yapılan bir Türk tatlısıdır. Üzerine tarçın serpilerek servis edilir.`,
  },
  {
    id: 38,
    title: "Künefe",
    category: "Tatlılar",
    price: "25.00 tl",
    img: "https://i.ytimg.com/vi/NRdwOXAGvlg/maxresdefault.jpg",
    desc: `Künefe, tel kadayıfın arasına peynir veya kaymak konulması ve şerbetlenmesiyle hazırlanan bir Türk tatlısıdır. Üzerine antep fıstığı serpilerek servis edilir.`,
  },
  {
    id: 39,
    title: "Revani",
    category: "Tatlılar",
    price: "15.00 tl",
    img: "https://i.ytimg.com/vi/8_KvzKmvl-w/maxresdefault.jpg",
    desc: `Revani, irmik, şeker, süt, yumurta ve limon kabuğunun karıştırılması ve fırında pişirilmesiyle hazırlanan bir Türk tatlısıdır. Üzerine şerbet dökülerek servis edilir.`,
  },
  {
    id: 40,
    title: "İrmik Helvası",
    category: "Tatlılar",
    price: "12.00 tl",
    img: "https://i.ytimg.com/vi/_uX9bNluzdQ/maxresdefault.jpg",
    desc: `İrmik Helvası, irmik, şeker, süt ve tereyağının kavrulmasıyla hazırlanan bir Türk tatlısıdır. Genellikle sıcak olarak servis edilir.`,
  }
  




];

initializePageFromMenu(menu);
