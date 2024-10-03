import React from "react";
import Panel from "../panel/panel-component";

const ArtPiece = ({
  product,
  onComplete,
  computeChecks,
  showPanel,
  panelInformation,
  setShowPanel,
}) => {
  return (
    <div>
      <>
        <div key={product.imageUrl}>
          <div>
            <h2>{product.name}</h2>
            <h3>${product.price}.00</h3>
            <div>
              <img
                type="Image"
                src={product.imageUrl}
                onLoad={onComplete}
                onError={onComplete}
                alt={product.name}
                width={200}
              />
            </div>
          </div>
          <div>
            {/* ICC per some of my other suggestions related to refactoring check marks logic, If you remove the options property from the objects, you can just run a simple for loop 4 times to generate the input boxes */}
            {product.options.map((opt, optIndex) => {
              // ICC don't really need to make this newOptIndex, can just add 1 when needed to the optIndex
              let newOptIndex = optIndex + 1;
              return (
                <input
                  key={optIndex}
                  // ICC this is where you could use the amtstars number to set the checked value
                  //  checked = {optIndex < product.amtstars}
                  checked={opt.checked}
                  type={`checkbox`}
                  name={newOptIndex}
                  onChange={(e) =>
                    computeChecks(e, newOptIndex, newOptIndex, product)
                  }
                />
              );
            })}
            {showPanel && (
              <Panel key={panelInformation.id} category={panelInformation} />
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default ArtPiece;
