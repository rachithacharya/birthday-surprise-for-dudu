import { useState, useRef } from 'react';
import './PasswordGate.css';

const CORRECT_CODE = '1811';

function PulseHeart({ filled }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pulse-heart ${filled ? 'is-filled' : ''}`}
    >
      <path
        className="pulse-heart-fill"
        d="M50 86 C50 86 8 56 8 28 C8 11 21 2 36 2 C45 2 50 9 50 9 C50 9 55 2 64 2 C79 2 92 11 92 28 C92 56 50 86 50 86 Z"
      />

      <path
        className="pulse-heart-outline"
        d="M50 86 C50 86 8 56 8 28 C8 11 21 2 36 2 C45 2 50 9 50 9 C50 9 55 2 64 2 C79 2 92 11 92 28 C92 56 50 86 50 86 Z"
      />
    </svg>
  );
}

function Petal({ style }) {
  return (
    <span
      className="bloom-petal"
      style={style}
    />
  );
}

export default function PasswordGate({
  onUnlock,
}) {
  const [digits, setDigits] =
    useState(['', '', '', '']);

  const [shake, setShake] =
    useState(false);

  const [blooming, setBlooming] =
    useState(false);

  const inputsRef = useRef([]);

  const filledCount =
    digits.filter(Boolean).length;

  const handleChange = (
    index,
    value
  ) => {
    if (!/^[0-9]?$/.test(value))
      return;

    const next = [...digits];

    next[index] = value;

    setDigits(next);

    if (value && index < 3) {
      inputsRef.current[
        index + 1
      ]?.focus();
    }

    if (
      next.every(Boolean) &&
      index === 3
    ) {
      checkCode(next.join(''));
    }
  };

  const handleKeyDown = (
    index,
    e
  ) => {
    if (
      e.key === 'Backspace' &&
      !digits[index] &&
      index > 0
    ) {
      inputsRef.current[
        index - 1
      ]?.focus();
    }
  };

  const checkCode = (
    code
  ) => {
    if (
      code === CORRECT_CODE
    ) {
      setBlooming(true);

      setTimeout(() => {
        onUnlock();
      }, 1400);

    } else {

      setShake(true);

      setTimeout(() => {
        setShake(false);

        setDigits([
          '',
          '',
          '',
          '',
        ]);

        inputsRef.current[0]
          ?.focus();

      }, 2000);
    }
  };

  const petals =
    Array.from(
      { length: 12 },
      (_, i) => {
        const angle =
          (i * 30 *
            Math.PI) /
          180;

        return {
          '--final': `translate(
          ${(
            Math.sin(
              angle
            ) * 100
          ).toFixed(1)}px,
          ${(
            -Math.cos(
              angle
            ) * 100
          ).toFixed(1)}px
        )`,
          animationDelay:
            `${i * 0.05}s`,
        };
      }
    );

  return (
    <div
      className={`seal-wrap ${
        blooming
          ? 'is-blooming'
          : ''
      }`}
    >
      <div className="seal-bg" />

      <div
        className={`lock-card ${
          shake
            ? 'is-shaking'
            : ''
        }`}
      >
        <div className="heart-stage">

          <PulseHeart
            filled={
              filledCount ===
              4
            }
          />

          {blooming && (
            <div className="bloom-burst">
              {petals.map(
                (
                  style,
                  i
                ) => (
                  <Petal
                    key={
                      i
                    }
                    style={
                      style
                    }
                  />
                )
              )}
            </div>
          )}
        </div>

        <p className="seal-eyebrow">
          ✨ PRIVATE BIRTHDAY LETTER ✨
        </p>

        <h1 className="seal-name">
          Sandeep ❤️
        </h1>

        <p className="seal-instruction">
          Enter the secret code
          to unlock something
          made especially
          for you
        </p>

        <div
          className="code-row"
          onPaste={(e) =>
            e.preventDefault()
          }
        >
          {digits.map(
            (
              digit,
              i
            ) => (
              <input
                key={
                  i
                }
                ref={(
                  el
                ) =>
                  (
                    inputsRef.current[
                      i
                    ] =
                      el
                  )
                }
                type="password"
                inputMode="numeric"
                maxLength={
                  1
                }
                value={
                  digit
                }
                autoFocus={
                  i ===
                  0
                }
                onChange={(
                  e
                ) =>
                  handleChange(
                    i,
                    e
                      .target
                      .value
                  )
                }
                onKeyDown={(
                  e
                ) =>
                  handleKeyDown(
                    i,
                    e
                  )
                }
              />
            )
          )}
        </div>

        <p className="seal-hint">
        Hint: Most of the time…
        we use this number together ❤️
        </p>

        {shake && (
          <p className="seal-error">
            Oops… try remembering our special number 🥹💕
          </p>
        )}

      </div>
    </div>
  );
}