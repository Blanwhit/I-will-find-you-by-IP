const hackerImage = document.getElementById( "hackerImage" );
const btn = document.getElementById( "btn" );
const success = document.getElementById( "success" );
const message = document.getElementById( "message" );
const continent = document.getElementById( "continent" );
const country = document.getElementById( "country" );
const countryCode = document.getElementById( "countryCode" );
const region = document.getElementById( "region" );
const regionName = document.getElementById( "regionName" );
const city = document.getElementById( "city" );
const currency = document.getElementById( "currency" );
const latitude = document.getElementById( "latitude" );
const longitude = document.getElementById( "longitude" );
const timezone = document.getElementById( "timezone" );
const weAreComing = document.getElementById( "weAreComing" );


fetch( " https://api.ipify.org/?format=json" )
    .then( response => response.json() )
    .then( query =>
    {
        userIp = query.ip;

        fetch( `https://api.ip2loc.com/f2bxD65xrdvO4jlgoQn0E9XTNK3apDEH/${ userIp }` )
            .then( response => response.json() )
            .then( response =>
            {
                console.log( response );
                success.innerText = `success: ${ response.success }`;
                continent.innerText = `continent: ${ response.location.continent.name }`;
                country.innerText = `country: ${ response.location.country.name }`;
                countryCode.innerText = `countryCode: ${ response.location.country.zip_code }`;
                region.innerText = `region: ${ response.location.country.subdivision_id }`;
                regionName.innerText = `regionName: ${ response.location.country.subdivision }`;
                city.innerText = `city: ${ response.location.city }`;
                currency.innerText = `currency: ${ response.currency.code[ 0 ] }`;
                latitude.innerText = `latitude: ${ response.location.latitude }`;
                longitude.innerText = `longitude: ${ response.location.longitude }`;
                timezone.innerText = `timezone: ${ response.time.zone }`;
            } )
    } );



function getAdress ()
{
    success.style.opacity = "1";
    continent.style.opacity = "1";
    country.style.opacity = "1";
    countryCode.style.opacity = "1";
    region.style.opacity = "1";
    regionName.style.opacity = "1";
    city.style.opacity = "1";
    currency.style.opacity = "1";
    latitude.style.opacity = "1";
    longitude.style.opacity = "1";
    timezone.style.opacity = "1";
    hackerImage.style.opacity = "1";
    weAreComing.style.opacity = "1";
    setTimeout( () =>
    {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }, 4000 );
}

btn.addEventListener( "click", getAdress )




