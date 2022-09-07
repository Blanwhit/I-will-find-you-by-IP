let usepIp;


fetch(" https://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(query => {
        userIp = query.ip;
    });

const hackerImage = document.getElementById("hackerImage");
const btn = document.getElementById("btn");
const status = document.getElementById("status");
const message = document.getElementById("message");
const continent = document.getElementById("continent");
const country = document.getElementById("country");
const countryCode = document.getElementById("countryCode");
const region = document.getElementById("region");
const regionName = document.getElementById("regionName");
const city = document.getElementById("city");
const district = document.getElementById("district");
const latitude = document.getElementById("zip");
const longtitude = document.getElementById("isp");
const query = document.getElementById("query");
const weAreComing = document.getElementById("weAreComing")


function getAdress() {
    fetch(`https://api.ip2loc.com/f2bxD65xrdvO4jlgoQn0E9XTNK3apDEH/${userIp}`)
        .then(response => response.json())
        .then(response => {
            status.innerText = `success: ${response.success}`;
            continent.innerText = `continent: ${response.location.continent.name}`;
            country.innerText = `country: ${response.location.country.name}`;
            countryCode.innerText = `countryCode: ${response.location.country.zip_code}`;
            region.innerText = `region: ${response.location.country.subdivision_id}`;
            regionName.innerText = `regionName: ${response.location.country.subdivision}`;
            city.innerText = `city: ${response.location.city}`;
            district.innerText = `currency: ${response.currency.code[0]}`;
            latitude.innerText = `latitude: ${response.location.latitude}`;
            longtitude.innerText = `provider: ${response.location.longtitude}`;
            query.innerText = `timezone: ${response.time.zone}`;
            hackerImage.style.opacity = "1";
            setTimeout(() => {
                weAreComing.style.opacity = "1";
            }, 2000);
        })
}

btn.addEventListener("click", getAdress)




