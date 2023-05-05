module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (!data.hasSubCategory) {
      data.subCategories.connect = [];
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (!data.hasSubCategory) {
      data.subCategories.connect = [];
    }
  },
};
