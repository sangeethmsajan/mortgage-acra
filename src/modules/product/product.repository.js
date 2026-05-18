let orders = [];

exports.createOrder = async (data) => {
  const newOrder = { id: Date.now().toString(), ...data };
  orders.push(newOrder);
  return newOrder;
};

exports.getProducts = async (req, res) => {
  // response = {
  //   data: [],
  //   pagination: {
  //     page: 1,
  //     limit: 10,
  //     total: 0,
  //   },            
  //   success: true
  // }
  // return response;
  const products = [
  {
    id: "prd_001",
    name: "Fresh Tomato",
    category: "Vegetable",
    price: 40,
    stock: 120,
    status: "IN_STOCK",
    thumbnail:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
  },
  {
    id: "prd_002",
    name: "Banana",
    category: "Fruit",
    price: 60,
    stock: 50,
    status: "LOW_STOCK",
    thumbnail:
      "https://images.unsplash.com/photo-1574226516831-e1dff420e37f",
  },
  {
    id: "prd_003",
    name: "Carrot",
    category: "Vegetable",
    price: 30,
    stock: 0,
    status: "OUT_OF_STOCK",
    thumbnail:
      "https://images.unsplash.com/photo-1447175008436-170170753d52",
  },
]
try {

    // Query Params
    const page =
      Number(req.query.page) || 1

    const limit =
      Number(req.query.limit) || 10

    const search =
      req.query.search || ""

    const category =
      req.query.category || ""

    const sortBy =
      req.query.sortBy || "name"

    const sortOrder =
      req.query.sortOrder || "asc"

    // Clone data
    let filteredProducts =
      [...products]

    // Search
    if (search) {

      filteredProducts =
        filteredProducts.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
        )
    }

    // Category Filter
    if (category) {

      filteredProducts =
        filteredProducts.filter(
          (product) =>
            product.category ===
            category
        )
    }

    // Sorting
    filteredProducts.sort(
      (a, b) => {

        const first =
          a[sortBy]

        const second =
          b[sortBy]

        if (sortOrder === "asc") {
          return first > second ? 1 : -1
        }

        return first < second ? 1 : -1
      }
    )

    // Pagination
    const total =
      filteredProducts.length

    const totalPages =
      Math.ceil(total / limit)

    const startIndex =
      (page - 1) * limit

    const endIndex =
      startIndex + limit

    const paginatedProducts =
      filteredProducts.slice(
        startIndex,
        endIndex
      )

    return res = {
      success: true,

      message:
        "Products fetched successfully",

      data: paginatedProducts,

      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage:
          page < totalPages,

        hasPrevPage:
          page > 1,
      },
    }

  } catch (error) {

    console.error(error)

    return res = {
      success: false,
      message:
        "Failed to fetch products",
    }
  }
};
