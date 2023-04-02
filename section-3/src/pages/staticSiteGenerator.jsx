export function getStaticProps() {
  return {
    props: {
      rand: Math.random(),
    },
  };
}

export default function StaticSiteGenerator(props) {
  return (
    <div>
      <span>Random: {props.rand}</span>
    </div>
  );
}
