
let imgURL = '';
let name = '';

// Navigation - Hide on Scroll

const expand = document.querySelector('.expand');
const navExpand = document.querySelector('.toExpand');
const navHeight = navExpand.clientHeight;
let toggler = false;


const slider = document.querySelector('.slider');
const slideItems = document.querySelector('.slider-item');
const slideText = document.querySelectorAll('.text-item');
const control = document.querySelectorAll('.ctrl');
const container = document.querySelector('.slider-container')
const items = 'img/png/1.png,img/png/2.png,img/png/3.png,img/png/4.png'.split(',');
const piva = [
    {
        id: 0,
        naziv: "Red Ale",
        vrsta: "Red Ale",
        procenat: 5,
        opis: "Prvo somborsko zanatsko pivo namenjeno ljubiteljima piva koji se prvi put susrecu sa kraft pivom. Odlikuje ga blaga karamelna nota od przenog slada koja mu isto vreme daje I tamniju, crvenu boju. Umerene je gorcine I laganog tela."
    },
    {
        id: 1,
        naziv: "Honey",
        vrsta: "DIPA",
        procenat: 8,
        opis: "Sa dodatkom meda iz lokalnog pčelinjaka, koji se tu našao kako bi podigao procenat alkohola i da pivu kompleksniji ukus. Preovladjuju prijatne hmeljne note kako u ukusu tako i u mirisu."
    },
    {
        id: 2,
        naziv: "Odzacar",
        vrsta: "Stout",
        procenat: 5.5,
        opis: "Crno pivo dobijeno korišćenjem 5 vrsta prženih ječmenih sladova od kojih, pored izrazito crne boje, dobija i bogatu aromu kafe, čokolade i karamele."
    },
    {
        id: 3,
        naziv: "Penal-Ipa",
        vrsta: "IPA",
        procenat: 6.3,
        opis: "Odlikuju ga izrazite citrusne i tropske hmeljne note i u ukusu i u mirisu. Iskorišćen je pun potencijal 'Mosaic' sorte hmelja koji mu daje poseban karakter."
    }
]

const getAttr = el => {
    return `${el.getAttribute('src')}`;
}

//return current index
const getIndex = (list, attr) => {
    return list.indexOf(attr);
}


const getSetText = (list, st, what) => {
    let index = getIndex(items, getAttr(st));
    for(let i of list){
        if(index === i.id){
            what[0].innerText = `${i.naziv}`;
            what[1].innerText = `${i.vrsta}, ${i.procenat}%`;
            what[2].innerText = `${i.opis}`
        }
    }
}

let counter = 0;
const controls = (el, direction, callback) => {
    let c = setInterval(callback, 3000);
    container.addEventListener('mouseover', e => {
        clearInterval(c);
        console.log(c)
    })
    container.addEventListener('mouseleave', e => {
        console.log('left')
        c = setInterval(callback, 3000);
    })
    el.addEventListener('click', e => {
        if(direction === 'right'){
            counter++;
            if(counter !== items.length){
                slideItems.setAttribute('src', items[counter])

            }else{
                counter = 0;
                slideItems.setAttribute('src', items[counter])
            }
            getSetText(piva, slideItems, slideText)
        }else if(direction === 'left'){
            if(counter === 0){
                counter = items.length;
            }
            counter--

            slideItems.setAttribute('src', items[counter])
            getSetText(piva, slideItems, slideText)
        }
    })
}

controls(control[0], 'left');
controls(control[1], 'right', () => {
    counter++;
    if(counter !== items.length){
        slideItems.setAttribute('src', items[counter])
    }else{
        counter = 0;
        slideItems.setAttribute('src', items[counter])
    }
    getSetText(piva, slideItems, slideText);
    slideItems.classList.add('active');
});

navExpand.setAttribute('data-expand', 'false');

expand.addEventListener('click', (e) => {
    if(!toggler){
        navExpand.style.height = '0px';
        toggler = true;
    }else{
        navExpand.style.height = `${navHeight}px`
        toggler = false;
    }
})

if(navExpand.getAttribute('data-expand') !== 'true'){
    navExpand.style.height = '0px';
    toggler = true;
}else{
    navExpand.style.height = `${navHeight}px`;
    toggler = false;
}

let wlcm = document.querySelector('wlcmContainer');
let size = document.body.clientHeight

const main = document.querySelector('main');


window.addEventListener('scroll', () => {



});

    let slideIn = document.querySelectorAll('.slide-in');
    let bg = document.querySelector('.welcome');
    let bg2 = document.querySelector('#div-d');

    console.log(bg.offsetHeight)


    slideIn.forEach(el => {

        let elHeight = el.scrollHeight;
        let elPosTop = el.offsetTop - bg2.scrollHeight - bg.scrollHeight + 200;
        let elPosBot = elPosTop + elHeight;

        const onScroll = () => {
            console.log("success")
            let scrollBottomPos = scrollY;
                console.log(elPosTop, elPosBot, elHeight, scrollBottomPos)
                if(scrollY > elPosTop && scrollY < elPosBot){
                    console.log('SUCC')
                    el.classList.add('fade-in');
                }
        }
        window.addEventListener('touchmove', onScroll)
        window.addEventListener('scroll', onScroll)
        window.addEventListener('onscroll', onScroll)
        
    })
    

    let map;
    let info;
    let service;

    const locations = {
        beograd: ["Samo Pivo!", "Šupa", "Pivski Zabavnik", "LOW - Alternative Bar"],
        noviSad: ["Beer Store 1", "Beer Store 2", "Pivoteka", "Varia Craft&Beer", "Škripa", "Diego ex Frida", "Fankić"],
        sombor: ["Bistro Aquarium", "Caffe De Sol", "Bowling Stones", "Gradska Pivnica", "Caffe Park"],
        subotica: ["Samo Pivo Subotica", "Fancy Burger"],
        becej: ["Beerabilly Brew House"],
        crvenka: ["Celtic Pub"],
    }

    const selOpt = document.querySelector('#grad');
    let storeLoc = document.querySelector('#store');
    let cityCenter;
    selOpt.addEventListener('input', e => {
        if(e.target.value !== 'default'){
            console.log(eval(e.target.value))
            cityCenter = eval(e.target.value);
            map = new google.maps.Map(document.querySelectorAll(".map")[0], {
                center: cityCenter,
                zoom: 12
            });
        }
        const item = e.target;
        let valName = item.options[item.selectedIndex].getAttribute('name');


        if(locations[valName]){
            storeLoc.innerHTML = `<option value="default">Izaberite Lokal</option>`;
            for(let l of locations[valName]){
                var storeElement = document.createElement('option');
                storeElement.innerHTML = l;
                storeLoc.appendChild(storeElement);
            }
        }else{
            console.log("error")
        }

    })

    storeLoc.addEventListener('input', (e) => {

        if(e.target.nodeName === 'SELECT'){
            const request = {
                query: e.target.value,
                fields: ['name', 'geometry']
            }

            service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(request, function(results, status){
                if(status === google.maps.places.PlacesServiceStatus.OK){
                    for(let i = 0; i<results.length; i++){
                        createMarker(results[0]);
                        console.log(results)
                    }
                    map.setCenter(results[0].geometry.location)
                    map.panTo(results[0].geometry.location)
                    map.setZoom(19)
                }else{
                    console.log('error')
                }
            });
        }
    })

    function initMap() {

        info = new google.maps.InfoWindow();

        map = new google.maps.Map(document.querySelectorAll(".map")[0], {
            center: cityCenter,
            zoom: 12
          });

    }

    function createMarker(place) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, "click", () => {
          info.setContent(place.name);
          info.open(map);
        });
      }

// CAROUSEL ->






