import { useEffect, useState } from "react";
import { UserRepositoryImpl } from "../../infrastructure/repositories/UserRepositoryImpl";
import { FetchUsers } from "../../application/usecases/FetchUsers";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const repository = new UserRepositoryImpl();
        const usecase = new FetchUsers(repository);
        const result = await usecase.execute();
        setUsers(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, loading, error };
};