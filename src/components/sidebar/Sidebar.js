import {
  SideNav,
  StyledButton,
  UlFlex,
  StyledMargin,
} from "../styles/sideNav.styled";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <SideNav>
      <div>
        <StyledMargin>
          <h6>LandLord's DashBoard</h6>
          <UlFlex>
            <StyledButton>
              <Link
                to='/landlord'
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  listStyle: "none",
                  fontSize: "1em",
                }}
              >
                <li
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    listStyle: "none",
                    fontSize: "1em",
                  }}
                >
                  Overview
                </li>
              </Link>
            </StyledButton>

            <StyledButton>
              <li
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  listStyle: "none",
                  fontSize: "1em",
                }}
              >
                Create Listing
              </li>
            </StyledButton>

            <StyledButton>
              <Link
                to='/landlord/tenantList'
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  listStyle: "none",
                  fontSize: "1em",
                }}
              >
                <li>Tenant Listing</li>
              </Link>
            </StyledButton>

            <StyledButton>
              <li
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  listStyle: "none",
                  fontSize: "1em",
                }}
              >
                Send a message
              </li>
            </StyledButton>

            <StyledButton>
              <li
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  listStyle: "none",
                  fontSize: "1em",
                }}
              >
                Sign Out
              </li>
            </StyledButton>
          </UlFlex>
        </StyledMargin>
      </div>
    </SideNav>
  );
}
