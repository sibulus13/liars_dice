import {
  buttonStyle,
  headerStyle,
  mainStyle,
  containerStyle,
} from "~/styles/generic";

export default function Controller({
  playerCount,
  bet,
  setBet,
  dice,
  setDice,
}) {
  const actionButtons = [
    { label: "Call BS", action: () => {} },
    { label: "Bet", action: () => {} },
  ];

  const inputs = [
    {
      label: "Bet",
      type: "range",
      min: 1,
      max: playerCount * 5,
      value: bet,
      onChange: setBet,
    },
    {
      label: "Dice",
      type: "range",
      min: 1,
      max: 6,
      value: dice,
      onChange: setDice,
    },
  ];

  return (
    <div className="p-4">
      {/* inputs */}
      <div className="py-2">
        {inputs.map((input, index) => (
          <div key={index}>
            <label className={headerStyle}>{input.label}</label>
            <div className="flex gap-2">
              <input
                type={input.type}
                id={input.label}
                name={input.label}
                min={input.min}
                max={input.max}
                value={input.value}
                onChange={(e) => input.onChange(e.target.value)}
              />
              {/* display the input number */}
              <p className={headerStyle}>{input.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 py-2">
        {actionButtons.map((button, index) => (
          <button key={index} className={buttonStyle} onClick={button.action}>
            {button.label}
          </button>
        ))}
      </div>
      ;
    </div>
  );
}
