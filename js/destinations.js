const destinations = [
  {id:"paris",name:"Paris",country:"France",region:"Europe",image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",desc:"The City of Light, famous for art, architecture, cafés and the Eiffel Tower.",about:"Paris blends historic streets, world-famous museums, elegant architecture and a lively café culture. It is a destination for art, food, photography and unforgettable city walks.",activities:["Visit the Eiffel Tower","Explore the Louvre","Walk along the Seine","Try French pastries","Explore Montmartre","Visit Notre-Dame"],best:"April – June / September – October"},
  {id:"bali",name:"Bali",country:"Indonesia",region:"Asia",image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",desc:"A tropical island known for beaches, temples, rice terraces and culture.",about:"Bali offers a mix of nature, culture and relaxation. Visitors can explore temples, beaches, waterfalls and traditional villages.",activities:["Visit Uluwatu Temple","Explore rice terraces","Relax at the beach","Try local cuisine","Visit waterfalls","Watch a sunset"],best:"April – October"},
  {id:"switzerland",name:"Switzerland",country:"Switzerland",region:"Europe",image:"https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",desc:"Breathtaking Alps, peaceful lakes, charming towns and scenic train journeys.",about:"Switzerland is known for Alpine landscapes, clean cities, beautiful lakes and scenic rail routes. It is ideal for nature lovers and adventure seekers.",activities:["Ride a scenic train","Explore the Alps","Go hiking","Visit Lake Geneva","Explore Lucerne","Try Swiss chocolate"],best:"June – September / December – February"},
  {id:"dubai",name:"Dubai",country:"UAE",region:"Middle East",image:"https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",desc:"A modern city known for architecture, shopping, beaches and desert experiences.",about:"Dubai combines modern architecture with desert landscapes, traditional markets and coastal experiences.",activities:["Visit Burj Khalifa","Explore Dubai Mall","Desert safari","Visit the souks","Relax at Jumeirah Beach","See Dubai Marina"],best:"November – March"},
  {id:"new-york",name:"New York",country:"USA",region:"North America",image:"https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80",desc:"A vibrant city famous for Times Square, Central Park, museums and diverse culture.",about:"New York is a fast-paced city filled with iconic landmarks, neighbourhoods, food, arts and entertainment.",activities:["Walk Central Park","See Times Square","Visit museums","Explore Brooklyn","See the Statue of Liberty","Try local food"],best:"April – June / September – November"},
  {id:"sydney",name:"Sydney",country:"Australia",region:"Oceania",image:"https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=1200&q=80",desc:"A coastal city known for its harbour, beaches and iconic Opera House.",about:"Sydney combines a beautiful harbour, urban attractions and beaches with outdoor activities.",activities:["See the Opera House","Visit Bondi Beach","Harbour cruise","Walk coastal trails","Explore The Rocks","Visit Taronga Zoo"],best:"September – November / March – May"},
  {id:"cape-town",name:"Cape Town",country:"South Africa",region:"Africa",image:"https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=80",desc:"A scenic coastal city surrounded by mountains, beaches and natural beauty.",about:"Cape Town offers dramatic landscapes, coastal views, cultural attractions and outdoor adventures.",activities:["Table Mountain","Visit the waterfront","Explore beaches","See penguins","Drive the coast","Visit Kirstenbosch"],best:"October – April"},
  {id:"maldives",name:"Maldives",country:"Maldives",region:"Asia",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",desc:"Tropical islands with turquoise water, beaches and peaceful resort experiences.",about:"The Maldives is known for clear water, coral reefs, white-sand beaches and relaxing island experiences.",activities:["Snorkelling","Island hopping","Sunset cruise","Beach relaxation","Scuba diving","Underwater photography"],best:"November – April"}
];

function cardHTML(d) {
  const saved = getWishlist().includes(d.id);
  return `<article class="destination-card">
    <img class="destination-image" src="${d.image}" alt="${d.name}">
    <div class="destination-body">
      <div class="country">${d.country} • ${d.region}</div>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
      <div class="card-actions">
        <a class="small-btn" href="destination-details.html?id=${d.id}">View Details</a>
        <button class="small-btn heart-btn ${saved ? "saved":""}" onclick="toggleWishlist('${d.id}')">${saved ? "♥ Saved" : "♡ Save"}</button>
      </div>
    </div>
  </article>`;
}

function renderDestinations(list = destinations) {
  const grid = document.getElementById("destinationGrid") || document.getElementById("homeDestinations");
  if (!grid) return;
  grid.innerHTML = list.map(cardHTML).join("");
  const noResults = document.getElementById("noResults");
  if (noResults) noResults.classList.toggle("hidden", list.length !== 0);
}

function renderWishlist() {
  const grid = document.getElementById("wishlistGrid");
  if (!grid) return;
  const saved = destinations.filter(d => getWishlist().includes(d.id));
  grid.innerHTML = saved.map(cardHTML).join("");
  document.getElementById("emptyWishlist")?.classList.toggle("hidden", saved.length !== 0);
}

function renderDetails() {
  const box = document.getElementById("detailsPage");
  if (!box) return;
  const id = new URLSearchParams(location.search).get("id") || "paris";
  const d = destinations.find(item => item.id === id) || destinations[0];
  const saved = getWishlist().includes(d.id);
  box.innerHTML = `
    <section class="details-hero" style="background-image:url('${d.image}')">
      <div class="details-title"><p class="eyebrow">${d.country} • ${d.region}</p><h1>${d.name}</h1></div>
    </section>
    <section class="details-content">
      <div>
        <p class="eyebrow">ABOUT THE DESTINATION</p><h2>Make memories in ${d.name}</h2>
        <p>${d.about}</p>
        <h2>Things to do</h2>
        <ul class="activity-list">${d.activities.map(a => `<li>✓ ${a}</li>`).join("")}</ul>
        <br><button class="btn primary" onclick="toggleWishlist('${d.id}')">${saved ? "♥ Remove from Wishlist" : "♡ Add to Wishlist"}</button>
      </div>
      <aside class="info-box"><h3>Quick Information</h3><div><strong>Country</strong>${d.country}</div><div><strong>Region</strong>${d.region}</div><div><strong>Best time</strong>${d.best}</div><div><strong>Travel style</strong>Culture • Nature • Experience</div></aside>
    </section>`;
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("homeDestinations")) renderDestinations(destinations.slice(0,6));
  if (document.getElementById("destinationGrid")) renderDestinations();
  if (document.getElementById("wishlistGrid")) renderWishlist();
  if (document.getElementById("detailsPage")) renderDetails();

  const search = document.getElementById("searchInput");
  const filter = document.getElementById("continentFilter");
  function filterDestinations() {
    const q = (search?.value || "").toLowerCase().trim();
    const region = filter?.value || "all";
    const result = destinations.filter(d =>
      (region === "all" || d.region === region) &&
      (`${d.name} ${d.country} ${d.region} ${d.desc}`).toLowerCase().includes(q)
    );
    renderDestinations(result);
  }
  search?.addEventListener("input", filterDestinations);
  filter?.addEventListener("change", filterDestinations);
});
