

export default function Home() {
  return (
    <>
      <div>
        <div className="w-[100%] h-[100vh] overflow-hidden">
          <video src={require('../../public/recorte.mp4')} autoPlay muted loop />
        </div>
      </div>

    </>
  );
}
