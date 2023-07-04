var title="Elezro",
    description="Elzero Web School",
    date_= "25/10";
let Html=`
<div class="card">
  <h3>${title}</h3>
  <p>${description}</p>
  <span>${date_}</span>
</div>
`;
let Html2=`
<div class="card">
  <h3>${title}</h3>
  <p>${description}</p>
  <span>${date_}</span>
</div>
`;
let Html3=`
<div class="card">
  <h3>${title}</h3>
  <p>${description}</p>
  <span>${date_}</span>
</div>
`;
document.write(Html,Html2,Html3)
document.write("-----------repeat section-----------------")
document.write(Html.repeat(4))

