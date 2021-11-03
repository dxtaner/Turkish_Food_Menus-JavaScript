function initializePageFromMenu(menu) {
  createButtonsFromMenu(menu);
  displayMenuItems(menu);
}

function displayMenuItems(menu, filter = "Tümü") {
  const filterdMenu = menu.filter((menuItem) =>
    filter == "Tümü" ? true : filter == menuItem.category
  );
  const menuItemElements = createMenuItemElements(filterdMenu);
  const sectionCenter = document.querySelector(".section-center.row");

  sectionCenter.innerHTML = " ";

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

  const uniqueCategories =  getCategoriesFromMenu(menu);

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
    title: "Lalanga",
    category: "Osmanlı Saray Mutfağı",
    price: "15.00 tl",
    img: "https://cdn.yemek.com/uploads/2018/06/lalanga-tarifi.jpg",
    desc: `Hafta sonları sabah kahvaltılarınız için farklı lezzetler arıyorsanız lalanga tarifi kesinlikle 
    denemeniz gereken bir tarif.`,
  },
  {
    id: 8,
    title: "Biber Dolması",
    category: "Zeytinyağlı Türk Yemekleri",
    price: 12.99,
    img: "https://cdn.yemek.com/mncrop/940/625/uploads/2015/09/zeytinyagli-biber-dolmasi-yemekcom.jpg",
    desc: `Zeytinyağlı kontenjanının öne çıkan yemeği, kalabalık sofraların vazgeçilmezdir.`,
  },
  {
    id: 9,
    title: "Karnıyarık",
    category: "Zeytinyağlı Türk Yemekleri",
    price: "13.99 tl",
    img: "https://iasbh.tmgrup.com.tr/aa154d/812/467/0/815/1024/1405?u=http://i.tmgrup.com.tr/sfr/arsiv/2010/07/14/Orjinal/573368182202.jpg",
    desc: `Karnıyarık Türk mutfağının belli başlı patlıcan yemeklerinden biridir. Hazırlanırken ana malzeme olan patlıcanın dışında soğan,
     biber, domates ve kıyma da kullanılır.`,
  },
  {
    id:10,
    title: "Keşkül Tatlısı",
    category: "Osmanlı Saray Mutfağı",
    price: "8.99 tl",
    img: "https://cdn.yemek.com/uploads/2019/03/gercek-keskul-tarifi.jpg",
    desc: `Geleneksel sütlü tatlılarımızın en sevilenlerinden keşkülün yapımı Osmanlı'dan bu yana biraz değişime uğramış durumda.
     Bu orijinal keşkül tarifinde örneğin un ya da nişasta yok; bolca badem var.`,
  },
  {
    id: 11,
    title: "Meftune – Diyarbakır",
    category: "Yöresel Lezzetler",
    price: "19.25 tl",
    img: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/meftune-35836.jpeg",
    desc: `Patlıcan, biber, domatesler bolca sumak eşliğinde pişirilir. Etli ya da etkisi iki türlüsü de yapılır.`,
  },
  {
    id: 12,
    title: "Bamya çorbası – Konya",
    category: "Yöresel Lezzetler",
    price: "22.25 tl",
    img: "https://cdn2.enuygun.com/media/lib/825x620/uploads/image/bamyacorbasi-35838.jpeg",
    desc: `Bamya çorbası. Klasik bamyadan farkı bamyaların çok küçük olması ve çorba gibi daha sulu yapılması.`,
  },
];

initializePageFromMenu(menu);
