import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

  .common-heading{
    margin-bottom: 4rem;
    text-transform: capitalize;
    margin-top: -47px;
  }
    .container {
      padding: 2rem 0 4rem 0;
      background:2px;
      width: 52rem;
      padding: 4rem;
      background-color: #eadfd6;
      box-shadow: 4px 4px 25px gray;
    border-radius: 24px;

      .contact-form {
        max-width: 50rem;
        margin-top: 54px;
        

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: -47px;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    // name attribute show when send in email .
    // autocomplete use after submit data is not show.
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xwkdqbze"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              value={isAuthenticated ? user.name :" "}
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              value={isAuthenticated?user.email:""}
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;