import Data from "../models/Data.js";

export const getFilteredData = async (req, res) => {
  try {
    const {
      end_year,
      topic,
      sector,
      region,
      pestle,
      source,
      swot,
      country,
      city
    } = req.query;
    console.log("Query parameters:", req.query);

    // Build dynamic MongoDB filter
    const filter = {};
    if (end_year) filter.end_year = end_year;
    if (topic) filter.topic = topic;
    if (sector) filter.sector = sector;
    if (region) filter.region = region;
    if (pestle) filter.pestle = pestle;
    if (source) filter.source = source;
    if (swot) filter.swot = swot;
    if (country) filter.country = country;
    if (city) filter.city = city;
    console.log("MongoDB filter:", filter);

    // Select only required fields
    const projection = {
      intensity: 1,
      likelihood: 1,
      relevance: 1,
      end_year: 1,
      country: 1,
      topic: 1,
      region: 1,
      city: 1,
    };

    const results = await Data.find(filter, projection).limit(100);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
