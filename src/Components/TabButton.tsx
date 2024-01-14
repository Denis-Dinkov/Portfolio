import { motion } from "framer-motion";

const tagVariants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
export default function TabButton({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}) {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        variants={tagVariants}
        animate={active ? "active" : "default"}
        className="h-1 bg-primary-500 mt-2 mr-3"
      />
    </button>
  );
}
