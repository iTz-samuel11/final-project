const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      poliza: undefined,
      user: undefined,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      signUpUser: async (requestBody) => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/create/user`,
            {
              method: "POST",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const user = await response.json();
          if (response.status === 201) {
            setStore({
              user: user,
            });
            return true;
          }
          return response.status === 201;
        } catch (error) {
          console.log("ahora si");
        }
      },
      addSaldo: async (requestBody) => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/create/user/${requestBody.cedula}`,
            {
              method: "PUT",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          return response.ok;
        } catch (error) {
          console.log(`no pude agregar saldo por ${error}`);
        }
      },
      logIn: async (requestBody) => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/create/token`,
            {
              method: "POST",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 400) {
            throw "Invalid email or password format";
          }
          const data = await response.json();
          localStorage.setItem("jwt-token", data.token);

          return data;
        } catch (error) {
          console.log(Error);
          return false;
        }
      },
      verification: async (requestBody) => {
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/take/verification`,
            {
              method: "POST",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 400) {
            throw "Invalid email or password format";
          }
          const data = await response.json();
          // localStorage.setItem("jwt-token", data.token);

          return data;
        } catch (error) {
          console.log(Error);
          return false;
        }
      },
      poliza: async () => {
        const token = localStorage.getItem("jwt-token");
        const response = await fetch(`${process.env.BACKEND_URL}/take/poliza`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok)
          throw Error("There was a problem in the login request");
        var data = await response.json();
        console.log("This is the data you requested", data);
        setStore({
          poliza: data,
        });
        return data;
      },
    },
  };
};

export default getState;
