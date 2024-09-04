import pricingStyle from "../../../assets/theme/style/pricingStyle.css";

const PricingCart = ({ button, price, features }) => {
  return (
    <div className="pricing-card">
      <div className="pricing-card-header">
        <button className="pricing-card-button">{button}</button>
      </div>
      <div className="pricing-card-price">
        <span className="pricing-card-currency">💸</span>
        <span className="pricing-card-amount">{price}</span>
      </div>
      <ul className="pricing-card-features">
        {features.map((feature, index) => (
          <li key={index} className={`feature-item ${feature.disabled ? 'disabled' : ''}`}>
            {feature.disabled ? (
              <>
                <span className="icon">➖</span>
                <span className="feature-text">{feature.name}</span>
              </>
            ) : (
              <>
                <span className="icon">✔️</span>
                <span className="feature-text">{feature.name}</span>
              </>
            )}
          </li>
        ))}
      </ul>
      <button className="pricing-card-button">TRY PREMIUM</button>
    </div>
  );
}

export default PricingCart;