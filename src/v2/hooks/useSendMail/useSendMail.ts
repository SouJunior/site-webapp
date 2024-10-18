import { useState } from "react";
import { sendMailAdmin } from "../../services/api";

const useSendMail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const sendMail = async (payload: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await sendMailAdmin.sendMailAdmin(payload);
      setSuccess(true);
    } catch (err) {
      setError("Error sending mail");
    } finally {
      setLoading(false);
    }
  };

  return { sendMail, loading, error, success };
};

export default useSendMail;
