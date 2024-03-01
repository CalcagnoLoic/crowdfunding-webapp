export const formValidation = (data: string, pledgeAmount: number) => {
  const regex = /^\d+$/;
  return (
    data.trim() !== "" &&
    regex.test(data) &&
    Number(data.trim()) >= pledgeAmount
  );
};
