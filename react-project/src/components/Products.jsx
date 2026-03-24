export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Routes>
        <Route index element={<div>All Products</div>} />
        <Route path="featured" element={<div>Featured Products</div>} />
        <Route path="new" element={<div>New Products</div>} />
      </Routes>
    </div>
  );
}