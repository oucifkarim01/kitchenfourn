function Product3D() {
  return (
    <div className="fluid-container viewer_blocck">
      <div className="container" style={{ width: "100%", height: "500px" }}>
        <model-viewer
          src={`${process.env.PUBLIC_URL}/assets/models/Horse.glb`}
          alt="Horse Model"
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          loading="lazy"
          auto-rotate
          camera-controls
          autoplay
          className="3d_viewer"
        ></model-viewer>
      </div>
    </div>
  );
}

export default Product3D;
