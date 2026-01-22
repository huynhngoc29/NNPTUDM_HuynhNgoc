//khai báo hàm tạo Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}
//khởi tạo mảng
const products = [
  new Product(1, "sp1", 1000, 40, "Category1", true),
  new Product(2, "sp2", 2000, 0, "Category2", false),
  new Product(3, "sp3", 1500, 15, "Accessories", true),
  new Product(4, "sp4", 3000, 5, "Category3", true),
  new Product(5, "sp5", 2500, 8, "Accessories", false),
];
//tao mang moi chua name va price
arrayNew = products.map(function (product) {
  return {
    name: product.name,
    price: product.price,
  };
});
console.log("Cau 3: ", arrayNew);
//loc san pham con hang
result = products.filter(function (product) {
  return product.quantity > 0;
});
console.log("Cau 4: ", result);
//Cau 5: ktra co it nhat sp có gia > 30
result = products.some(function (product) {
  return product.price > 30;
});
if (result) {
  console.log("Cau 5: Co sp co gia > 30 ");
} else {
  console.log("Cau 5: Khong co sp co gia > 30 ");
}

//Cau 6: ktra tat ca sp co category la Accessories co duoc ban khong
result = products.every(function (product) {
  if (product.category === "Accessories") {
    return product.isAvailable === true;
  }
  return true;
});
if (result) {
  console.log("Cau 6: Tat ca sp Accessories deu duoc ban ");
} else {
  console.log("Cau 6: Khong phai tat ca sp Accessories deu duoc ban ");
}
//Cau 7: tinh tong so gia tri kho = price * quantity
result = products.reduce(function (total, product) {
  return total + product.price * product.quantity;
}, 0);
console.log("Cau 7: Tong so gia tri kho la ", result);
//Cau 8:
for (const product of products) {
  console.log(
    `${product.name} - ${product.category} - ${product.isAvailable ? "Dang ban" : "Ngung ban"}`,
  );
}
// Cau 9:
console.log("Cau 9: ");
for (const key in products[0]) {
  console.log(key, products[0][key]);
}
// Cau 10:lay danh sach ten cac sp dang ban chay va con hang
result = products
  .filter(function (product) {
    return product.isAvailable === true && product.quantity > 0;
  })
  .map(function (product) {
    return product.name;
  });
console.log("Cau 10: ten cac sp dang ban chay va con hang: ", result);
