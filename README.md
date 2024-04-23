# SUTRA API Samples Repository

A resource designed to provide straightforward examples on how to implement API testing in both Python and TypeScript.
This repository is aimed at developers, QA engineers, and anyone interested in using our models.

## Repository Structure

This repository is organized into subdirectories:

- **[python](python/README.md)**
- **[typeScript](typescript/README.md)**
- **[curl](curl/README.md)**

Each subdirectory contains sample code and instructions specific to the respective programming language.

## Getting Started

To get started with these examples, you will need to clone this repository to your local machine.
Depending on your environment setup, you may need to install additional software or libraries.
For obtaining an API key contact: `support@two.ai`. The documentation can be accessed [here](https://docs.two.ai/).

### Prerequisites

- Get a SUTRA API key and set as an environment variable named SUTRA_API_KEY.
- Git (for cloning this repository)
- Python (for running Python samples)
- Node.js and npm/yarn (for running TypeScript samples)

## How to Use This Repository

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/TwoResearch/sutra-examples.git
   cd sutra-examples
   ```

2. **Navigate to a Subdirectory:**
   ```bash
   cd python   # For Python samples
   ```
   or
   ```bash
   cd typescript   # For TypeScript samples
   ```
   or
   ```bash
   cd curl   # For Curl examples
   ```

3. **Follow the README in the Subdirectory:**
   Each subdirectory has its own README file with detailed instructions on how to run the samples.

4. List of available endpoints and models: 

| endpoint url                                    | model        |
|-------------------------------------------------|--------------|
| `https://api.two.ai/v1/sutra-light/completion`  | sutra-light  |
| `https://api.two.ai/v1/sutra-pro/completion`    | sutra-pro    |
| `https://api.two.ai/v1/sutra-turbo/completion`  | sutra-turbo  |
| `https://api.two.ai/v1/sutra-online/completion` | sutra-online |

## Contributions and Feedback

Contributions to this repository are welcome. To contribute, please follow the standard fork-and-pull request workflow. Ensure you update or provide a README file in your pull requests if necessary.

For feedback and questions, please open an issue in this repository.

## License

This repository is released under the MIT License. See the `LICENSE` file for more details.
