import { topHeaderData } from "../../data/topHeaderData";

export default function TopHeader() {
  const { address, contacts } = topHeaderData;

  return (
    <div className="ht-top-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left">
              <p>
                <i className={`fa-solid ${address.icon}`} /> {address.text}
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <ul className="right">
              {contacts.map((item, index) => (
                <li key={index}>
                  <i className={`fa-solid ${item.icon}`} />
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
