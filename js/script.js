var totalCount = 48;


var captions = ["null", "ISLE OF SKYE, SCOTLAND","AMBOSELI NTL. PARK, KENYA", "MAASAI MARA, KENYA", "DAEDALUS REEF, EGYPT", 
                "BORACAY, philippines", "GRAAF REINET, SOUTH AFRICA", "SANI PASS, LESOTHO", "SAUNTON SANDS, UK", "VANG VIENG, LAOS",
                "LAUTERBRUNNEN, SWITZERLAND", "GANSBAaI, SOUTH AFRICA", "Niš, SERBIA", "Machu Picchu, Peru", "SAPA, VIETNAM",
                "Reyðarfjörður, ICELAND", "SANTIAGO, CHILE", "ANGKOR WAT, CAMBODIA", "Brazzaville, Republic of the Congo", "ANGKOR WAT, CAMBODIA",
                "DAHAB, EGYPT", "KUALA LUMPUR, MALAYSIA", "DUISBURG, GERMANY", "BETTY'S, SOUTH AFRICA", "SILFRA, ICELAND", "SAUNTON SANDS, UK",
                "BASSE-TERRE, guadeloupe", "north carolina, USA", "new york, usa", "BRecon beacons, Wales", "toulouse, france",
                 "portishead, uk", "tintagel, UK", "texas, usa", "pen y fan, wales", "north carolina, usa", "mt. cook, new zealand",
                "cardigan bay, wales", "amsterdam, netherlands", "malaga, spain", "kung si, laos", "la digue, seychelles",
                "glenville, usa", "victoria falls, zambia", "sydney, australia", "Ko Phi Phi, Thailand", "Hohenschwangau, Germany","istanbul, turkey"];
 
var camera = ["null", "Nikon D7200", "Nikon D7200", "Nikon D7200", "Canon IXUS 85", "iPhone 6 Plus", "Nikon D90","Nikon D90", "Canon G9X", "Nikon D90",
             "Nikon D90", "Nikon D90", "Nikon D50", "Nikon D50", "Nikon D90", "Nikon D90", "Nikon D90", "Nikon D50", "Canon IXUS 85", "Nikon D50", "Canon IXUS 85",
             "Nikon D50", "iPhone SE", "Nikon D90", "GoPRo Hero4", "Canon G9X", "Nikon D90", "iPhone SE", "iPhone 7", "One Plus 3T", "iPhone 7"
             , "Nikon D7200", "iPhone 7", "canon EOS M", "samsung galaxy S7", "iphone 7", "canon powershot a300", 
             "samsung galaxy S7", "iphone 7", "iphone 7", "nikon d90", "samsung galaxy s7","iphone 7","canon digital rebel xt", "fuji finepix s5500",
             "fuji finepix s5500", "nikon d50","nikon f90"]


var num = Math.ceil( Math.random() * totalCount );


// function to load a random photo on HOME
function ChangeIt() 
{
document.body.background = 'gallery/'+num+'.jpg';
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";
document.body.style.webkitBackgroundSize = "cover";
document.getElementById('captions').innerHTML = captions[num];
document.getElementById('cameras').innerHTML = camera[num];
}



//function to create gallery on PHOTOS
function createGallery() {


    var cont = document.createElement('div');
    cont.className = 'container gallery';
    document.getElementsByTagName('body')[0].appendChild(cont);

        var row = document.createElement('div');
        row.className = 'row';

            for(var i=totalCount; i> 0; i--){

                var col = document.createElement('div');
                col.className = 'col-';

                    var photo_link = document.createElement('a');
                    photo_link.setAttribute('href', 'gallery/' + i + '.jpg');
                    photo_link.setAttribute('data-lightbox','roadtrip');
                    photo_link.setAttribute('data-title', captions[i] + '  -  ' + camera[i] )
                 

                    var img_link = document.createElement('img');
                    img_link.setAttribute('src','gallery/thumb/' + i + '.jpg');
                    img_link.className = 'rounded';
                    img_link.setAttribute('style','width:200px; margin: 5px');

                    photo_link.appendChild(img_link);

                    col.appendChild(photo_link);

                    row.appendChild(col);

                    cont.appendChild(row);

            }

        }    















