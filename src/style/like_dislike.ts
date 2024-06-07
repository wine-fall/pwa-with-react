export const like = {
  '0%, 20%, 53%, 100%': {
    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    transform: 'translate3d(0, 0, 0)',
  },
  '40%, 43%': {
    'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
  },
  '70%': {
    'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
  },
  '80%': {
    'transition-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    transform: 'translate3d(0, 0, 0) scaleY(0.95)',
  },
  '90%': {
    transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
  },
};

export const dislike = {
  '0%, 20%, 53%, 100%': {
    'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    transform: 'translate3d(0, 0, 0)',
  },
  '40%, 43%': {
    'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    transform: 'translate3d(0, 16px, 0) scaleY(0.9)', // jump down
  },
  '70%': {
    'animation-timing-function': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    transform: 'translate3d(0, 8px, 0) scaleY(0.95)', // jump down
  },
  '80%': {
    'transition-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    transform: 'translate3d(0, 0, 0) scaleY(1.05)',
  },
  '90%': {
    transform: 'translate3d(0, 2px, 0) scaleY(0.98)', // jump down
  },
};
