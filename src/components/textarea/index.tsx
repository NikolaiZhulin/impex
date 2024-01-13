import React, {
  DetailedHTMLProps, memo, ReactNode, TextareaHTMLAttributes, useEffect, useRef,
} from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  label?: ReactNode
  wrapClassName?: string
  textareaError?: string | null,
  errorAbsolute?: boolean,
  errorClassName?: string,
}

const resizeTextarea = (elem: HTMLTextAreaElement, height: number) => {
  elem.style.height = 'inherit';
  elem.style.height = `${height}px`;
};

const Textarea = ({
  placeholder, value, label, onChange, className, wrapClassName, textareaError, errorAbsolute, errorClassName, ...props
}: Props) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textArea = ref.current;
    if (!textArea) return;
    resizeTextarea(textArea, textArea.scrollHeight);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'inherit';
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  };
  return (
    <div className={cn(styles.container, { [styles.containerError]: textareaError }, wrapClassName)}>
      <label
        className={styles.label}
        htmlFor={label as string}
      >{label}
      </label>
      <textarea
        {...props}
        autoComplete="off"
        onChange={onChange}
        className={cn(styles.textarea, className)}
        name={placeholder}
        id={placeholder}
        placeholder={placeholder}
        value={value}
        onKeyDown={handleKeyDown}
        ref={ref}
      />
      {textareaError && (
        <div
          className={cn(styles.errorText, { [styles.errorAbsolute]: errorAbsolute }, errorClassName)}
        >{textareaError}
        </div>
      )}
    </div>
  );
};

Textarea.defaultProps = {
  errorAbsolute: false,
  errorClassName: '',
  textareaError: undefined,
  wrapClassName: '',
};

export default memo(Textarea);
