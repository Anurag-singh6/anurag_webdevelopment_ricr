async function getproduct2() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const product = document.getElementById("product2");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("row", "p-2");

      d.innerHTML = `<div class="card2 border rounded shadow p-3">
              <div class="h-50">
                <img
                  src=${element.image}
                  alt=${element.title}
                  class="w-100 h-100 object-fit-contain"
                />
              </div>
              <div class="h-50 p-2">
                <div class="fw-bold fs-4">${
                  element.title.length > 50
                    ? element.title.slice(0.45) + "..."
                    : element.title
                }</div>
                <div class="fw-semibold">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
                <div class="fw-semibold fs-5">₹ ${element.price * 100}</div>
                <div class="mb-2">
                  ${element.description.slice(0, 80)}...
                </div>
              <div class="d-flex justify-content-center gap-3">
                <button class="btn btn-outline-primary">Add Cart <i class="bi bi-cart3"></i></button>
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
            </div>`;
      product.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}
getproduct2();
