const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
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
          return response.status === 201;
        } catch (error) {
          console.log("ahora si");
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
          return response.status === 201;
        } catch (error) {
          console.log(Error);
          return false;
        }
      },
    },
  };
};

export default getState;
