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
            events(orderBy:createdAt_DESC){
                id
                title
                slug
                date
                time
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
        time
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

export async function getAllMembers() {
  const data = await fetchAPI(`
    query AllMembers {
      members {
        id
        name
        text
        instrument
        profilePicture {
          id
          url
          width
          height
        }
      }
    }
  `);

  return data.members;
}

export async function getMemberById(id) {
  const data = await fetchAPI(
    `
    query MemberById($id: ID!) {
      member(where: {id: $id}){
        id
        name
        instrument
        text
        profilePicture {
          id
          url
          width
          height
        }
      }
    }
  `,
    {
      variables: {
        id,
      },
    }
  );
  return data.member;
}

export async function getPageBySlug(locale) {
  const data = await fetchAPI(
    `
      query getPageBySlug($locale: Locale!){
        pages(locales: [$locale]){
          id
          title
          text
        }
      }
    `,
    {
      variables: {
        locale,
      },
    }
  );

  return data.pages[0];
}
