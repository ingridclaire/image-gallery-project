        import React from 'react';
        import Panel from "../panel/panel-component";
        
       const ArtPiece = ({product,onComplete,computeStars,showPanel,panelInformation, setShowPanel}) => {
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
                          {product.options.map((opt, optIndex) => {
                            let newOptIndex = optIndex + 1;
                            return (
                              <input
                                key={optIndex}
                                checked={opt.checked}
                                type={`checkbox`}
                                name={newOptIndex}
                                onChange={(e) =>
                                  computeStars(e, newOptIndex, newOptIndex, product)
                                }
                              />
                            );
                          })}
                          {showPanel && (
                            <Panel
                              key={panelInformation.id}
                              category={panelInformation}
                            />
                          )}
                        </div>
                      </div>
                </>
            </div>
          );
          }

          export default ArtPiece