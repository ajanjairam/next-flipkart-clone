const { sanitize } = require("@strapi/utils");
const { contentAPI } = sanitize;

module.exports = {
  async findHeader(ctx) {
    const contentType = strapi.contentType("api::category.category");
    const sanitizedQueryParams = await contentAPI.query(
      ctx.query,
      contentType,
      ctx.state.auth
    );
    console.log(sanitizedQueryParams);

    const entities = await strapi.db.query("api::category.category").findMany({
      where: { displayOnHeader: true },
      populate: {
        image: true,
      },
    });

    return await contentAPI.output(entities, contentType, ctx.state.auth);
  },
};
