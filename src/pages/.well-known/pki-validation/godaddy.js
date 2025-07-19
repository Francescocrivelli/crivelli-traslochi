export default function GoDaddyVerification() {
  return (
    <div>sl2t35g18af3889o708ehuh69k</div>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('sl2t35g18af3889o708ehuh69k');
  res.end();
  
  return {
    props: {},
  };
} 