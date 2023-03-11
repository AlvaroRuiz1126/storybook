import "./myLabel.css";

interface MyLabelProps {
  /**
   * The text to render in the component?
   */
  label: string;
  /**
   * The size of the text
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize label text
   */
  allCaps?: boolean;
  /**
   * Color of the text
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Custom font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "No Label",
  size = "normal",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        color: fontColor ?? color,
      }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
