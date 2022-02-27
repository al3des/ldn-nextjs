async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllEvents() {
  const data = await fetchAPI(`
        query getAllEvents{
            events {
                id
                title
                slug
                date
                price
                flyer {
                    id
                    url
                    width
                    height
                }
                venue {
                    id
                    name
                    address
                    mapsUrl
                    venueUrl
                    instagram
                }
            }
        }
    `);

  return data.events;
}

export async function getEventBySlug(slug) {
  const data = await fetchAPI(
    `
    query getEventBySlug($slug: String!){
      event(where: {slug: $slug}){
        id
        title
        slug
        description
        date
        price
        flyer {
          id
          url
          width
          height
        }
        venue {
          id
                    name
                    address
                    mapsUrl
                    venueUrl
                    instagram
        }
      }
    }
  `,
    {
      preview: false,
      variables: {
        slug,
      },
    }
  );

  return data.event;
}
