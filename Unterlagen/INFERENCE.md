# Inference

Was ist Inference? -> Inference ist die Fähigkeit eines Modells, auf Basis von gelernten Mustern und Informationen neue Schlussfolgerungen zu ziehen oder Vorhersagen zu treffen. Es ermöglicht einem Modell, auf unbekannte Daten zu reagieren und relevante Informationen zu generieren, auch wenn es diese spezifischen Daten nicht zuvor gesehen hat.

## Opencode Config

- npm i -g opencode-ai
- opencode auth login  # provider-connect
- `/model` in der TUI bzw. `opencode models`  # liste was verfügbar ist
- `ctrl-d` ... exit app (EOF)

## Providers

- groq (eigenes Silikon)
- aistudio google gemini
- openrouter (PAYG, aber freie Modelle)
- opencode (big pickle)
- nvidia

**Recherche Inference:**

## komplett "gratis"

Groq: Sehr schnelle Inference mit kostenlosen Limits für Open-Source-Modelle wie Llama, Mistral und Gemma; gut für Tests und kleine Projekte.
Link: https://console.groq.com/
Account: Mit E-Mail anmelden, einloggen, API-Key im Dashboard erstellen.
Kosten: Free Tier vorhanden, danach abhängig von Modell und Nutzung.

Google AI Studio / Gemini API: Gute kostenlose Einstiegsmöglichkeit für Gemini 2.5 und Gemini Flash, aber mit Rate Limits.
Link: https://aistudio.google.com/
Account: Mit deinem Google-Konto anmelden, dann API-Key erstellen.
Kosten: Kostenloses Kontingent vorhanden; bei höherer Nutzung wird über Google Cloud abgerechnet.
Dürfte ident sein mit:

- Google Gemini API Free Tier (Google AI Studio)   https://ai.google.dev/pricing

OpenRouter: Viele Modelle unter einem Dach, sowohl kostenlose als auch bezahlte Modelle.
Link: https://openrouter.ai/
Account: E-Mail oder SSO anmelden, dann API-Key im Account-Bereich erstellen.
Kosten: Pay-as-you-go, Plattformgebühr laut Pricing aktuell 5,5 Prozent; außerdem gibt es kostenlose Modelle mit Limits.

**Cloudflare Workers AI** | LLaMA, Mistral u. a. | Gratis-Kontingent im Free-Plan |

**Ollama (lokal)** | Beliebige Open-Source-Modelle | 100 % gratis, läuft auf eigenem PC |

**Mistral API** | Mistral 7B | Gratis-Tier verfügbar |

https://huggingface.co/docs/inference-providers/pricing

## "günstig"
