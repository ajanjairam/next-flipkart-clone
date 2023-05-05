module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    console.log(data);
    if ("categories" in data && "connect" in data.categories) {
      const results = await Promise.all(
        data.categories.connect.map(async (category) => {
          const temp = await strapi.db.query("api::category.category").findOne({
            where: { id: category.id },
          });
          return temp.hasSubCategory;
        })
      );
      data.categories.connect = data.categories.connect.filter(
        (_, index) => results[index]
      );
    }
    console.log(data);
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    if ("categories" in data && "connect" in data.categories) {
      const results = await Promise.all(
        data.categories.connect.map(async (category) => {
          const temp = await strapi.db.query("api::category.category").findOne({
            where: { id: category.id },
          });
          return temp.hasSubCategory;
        })
      );
      data.categories.connect = results.filter((_, index) => results[index]);
    }
  },
};
