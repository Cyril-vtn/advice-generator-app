"strict mode";
const btn = document.querySelector(".dice");
const card = document.querySelector(".card-content");

// Call the API
btn.addEventListener("click", callData);
// render APi to the html

async function callData() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  console.log(data);
  const html = `
  <p class="title-advice">ADVICE #${data.slip.id}</p>
  <p class="advice">
  ${data.slip.advice}
  </p>
  <svg
    width="295"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    class="divider"
  >
    <g fill="none" fill-rule="evenodd">
      <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
      <g transform="translate(138)" fill="#CEE3E9">
        <rect width="6" height="16" rx="3" />
        <rect x="14" width="6" height="16" rx="3" />
      </g>
    </g>
  </svg>
  `;
  card.innerHTML = "";
  return (card.innerHTML += html);
}
