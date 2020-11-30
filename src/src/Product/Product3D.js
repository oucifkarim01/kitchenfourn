function Product3D() {
  return (
    <div className="fluid-container viewer_blocck">
      <div className="container" style={{ width: "100%", height: "500px" }}>
        <model-viewer
          src={`${process.env.PUBLIC_URL}/assets/models/Horse.glb`}
          alt="Horse Model"
          ar
          loading="lazy"
          auto-rotate
          camera-controls
          autoplay
          className="3d_viewer"
        ></model-viewer>
        <a
          href="intent://arvr.google.com/scene-viewer/1.0?file=
          https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;"
        >
          Avocado
        </a>
      </div>
    </div>
  );
}

export default Product3D;
