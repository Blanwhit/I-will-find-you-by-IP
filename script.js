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
const zip = document.getElementById("zip");
const isp = document.getElementById("isp");
const query = document.getElementById("query");
const weAreComing = document.getElementById("weAreComing")


function getAdress() {
    fetch(`http://ip-api.com/json/${userIp}?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,isp,query`)
        .then(response => response.json())
        .then(response => {
            status.innerText = `status: ${response.status}`;
            continent.innerText = `continent: ${response.continent}`;
            country.innerText = `country: ${response.country}`;
            countryCode.innerText = `countryCode: ${response.countryCode}`;
            region.innerText = `region: ${response.region}`;
            regionName.innerText = `regionName: ${response.regionName}`;
            city.innerText = `city: ${response.city}`;
            district.innerText = `district: ${response.district}`;
            zip.innerText = `zip: ${response.zip}`;
            isp.innerText = `provider: ${response.isp}`;
            query.innerText = `ip: ${response.query}`;
            if (response.message) {
                message.innerText = `Error message: ${response.message}`;
            }
            hackerImage.style.opacity = "1";
            weAreComing.style.opacity = "1";
        })
}

btn.addEventListener("click", getAdress)




