export default function Post({ slug }) {
  return (
    <div>
      Post: /{slug}
    </div>
  )
}


export async function getStaticProps({
  params,
  locales,
  locale,
  defaultLocale
}) {
  // graphql
  // request
  return {
    props: {
      slug: params.slug
    },
    // revalidate: many secons as you want
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'post-01' } },
      { params: { slug: 'post-02' } },
      { params: { slug: 'post-03' } },
    ],
    fallback: true,
  };
}