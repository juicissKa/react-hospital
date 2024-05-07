import { Grid } from "@mui/material";
import React from "react";
import { HideableSection } from "../../../../../../features/HideableSection";
import { SelectGrid } from "../../../../../../shared/ui/SelectGrid";
import { DatePickerGrid } from "../../../../../../shared/ui/DatePickerGrid";
import { VisitData } from "../../../CreateVisitForm";
import {
  Control,
  FormProvider,
  useForm,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import { TextFieldGrid } from "../../../../../../shared/ui/TextFieldGrid";
import { CheckboxGrid } from "../../../../../../shared/ui/CheckboxGrid";
import { HideableSectionSelect } from "../../../../../../features/HideableSectionSelect";
import { Fibrillation } from "./HideableComponents/Fibrillation";
import { HideableSectionSelectItem } from "../../../../../../features/HideableSectionSelect/ui/HideableSectionSelect";
import { Extrasystole } from "./HideableComponents/Extrasystole";
import { FormGroup } from "../../../../../../shared/ui/FormGroup";
import { VisitFormData } from "../../../../../../shared/api/visit/model/model";
import { StepperPagination } from "../StepperPagination";

type IllnessessStepData = {
  covid?: {
    type_id: number;
    complications_id: number;
    heaviness_id: number;
    ethiological_causes_id: number;
  };
  disability?: {
    group_id: number;
    date: Date;
  };
  diabete?: {
    type_id: number;
    treatment_id: number;
    sugar_before_eating: number;
    sugar_after_eating: number;
    compensation_id: number;
    him_id: number;
  };
  nervous_system?: {
    polyneuropathy_id: number;
    mononeuritis: number;
    complication_id: number;
    atherosclerosis_id: number;
  };
  heart_issue?: {
    cardiac_ischemia_id: number;
    vessel_id: number;
    peripherial_vascular_damage_id: number;
    noak_id: number;
    disaggregant_id: number;
    coagulopathies_id: number;
    heart_failure_id: number;
    heart_failure_stage_id: number;
    cerebral_atherosclerosis_id: number;
    cvb_atherosclerosis_id: number;
    lower_limbs_atherosclerosis_id: number;
    atherosclerosis_therapy_id: number;
    atherosclerosis_complications_id: number;
    aorta_atherosclerosis: boolean;
    cardiac_atherosclerosis: boolean;
    heart_rhythm_disorder_id: number;
    heart_damage_id: number;
    heart_disease_id: number;
    myocardial_dystrophy: number;
    myocardial_infarction_before: boolean;
    rheumatic_heart_disease: boolean;
  };
  arterial_hypertension: {
    stage: number;
    risk_before_stroke: number;
    duration_years: number;
    target_organs_id: number;
    inheritance_id: number;
    therapy_before_id: number;
    therapy_id: number;
    therapy_duration_years: number;
    drugs_combination_id: number;
    emergency_helps_id: number;
    systolic_blood_pressure_before: number;
    systolic_blood_pressure: number;
    diastolic_blood_pressure_before: number;
    diastolic_blood_pressure: number;
    catastrophy_relation_id: number;
    catastrophy_type_id: number;
    catastrophy_duration_years: number;
    pathological: {
      type_id: number;
      syncopes: number;
      syncopes_periodicity: number;
      therapy_id: number;
    };
  };
};

type IllnessesStepProps = {
  patientId: number | null;
  data: VisitFormData["illnesses"];
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
};

export const IllnessesStep: React.FC<IllnessesStepProps> = ({
  patientId,
  data: {
    covid,
    disability,
    diabete,
    nervous_system,
    heart_issue,
    arterial_hypertension,
  },
  setActiveStep,
}) => {
  const methods = useForm({
    defaultValues: {
      covid: {
        type_id: 1,
        complications_id: 1,
        heaviness_id: 1,
        ethiological_causes_id: 1,
      },
      disability: {
        group_id: 1,
      },
      diabete: {
        type_id: 1,
        treatment_id: 1,
        sugar_before_eating: 0,
        sugar_after_eating: 0,
        compensation_id: 1,
        him_id: 1,
      },
      nervous_system: {
        polyneuropathy_id: 1,
        mononeuritis: 1,
        complication_id: 1,
        atherosclerosis_id: 1,
      },
      heart_issue: {
        cardiac_ischemia_id: 1,
        vessel_id: 1,
        peripherial_vascular_damage_id: 1,
        noak_id: 1,
        disaggregant_id: 1,
        coagulopathies_id: 1,
        heart_failure_id: 1,
        heart_failure_stage_id: 1,
        cerebral_atherosclerosis_id: 1,
        cvb_atherosclerosis_id: 1,
        lower_limbs_atherosclerosis_id: 1,
        atherosclerosis_therapy_id: 1,
        atherosclerosis_complications_id: 1,
        aorta_atherosclerosis: false,
        cardiac_atherosclerosis: false,
        heart_rhythm_disorder_id: 1,
        heart_damage_id: 1,
        heart_disease_id: 1,
        myocardial_dystrophy: 1,
        myocardial_infarction_before: false,
        rheumatic_heart_disease: false,
      },
      arterial_hypertension: {
        stage: 1,
        risk_before_stroke: 0,
        duration_years: 0,
        target_organs_id: 1,
        inheritance_id: 1,
        therapy_before_id: 1,
        therapy_id: 1,
        therapy_duration_years: 0,
        drugs_combination_id: 1,
        emergency_helps_id: 1,
        systolic_blood_pressure_before: 0,
        systolic_blood_pressure: 0,
        diastolic_blood_pressure_before: 0,
        diastolic_blood_pressure: 0,
        catastrophy_relation_id: 1,
        catastrophy_type_id: 1,
        catastrophy_duration_years: 1,
        pathological: {
          type_id: 1,
          syncopes: 0,
          syncopes_periodicity: 0,
          therapy_id: 1,
        },
      },
    },
  });
  const heartRhythmDisorderItems: HideableSectionSelectItem[] = [
    {
      id: 1,
      value: "Фибрилляция предсердий",
      component: <Fibrillation data={heart_issue.fibrillation} />,
    },
    { id: 2, value: "Трепетание предсердий" },
    {
      id: 3,
      value: "Экстрасистолия",
      component: <Extrasystole data={heart_issue.extrasystole} />,
    },
    { id: 4, value: "Мерцательная аритмия" },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    // setActiveStep((prev) => prev + 1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={12}>
            <HideableSection label="Ковид">
              <SelectGrid
                name="covid.type_id"
                items={covid.types}
                label={"Тип ковида"}
                labelId={"covid-label"}
              />
              <SelectGrid
                name="covid.complications_id"
                items={covid.complications}
                label={"Осложнения"}
                labelId={"complications-label"}
              />
              <SelectGrid
                name="covid.heaviness_id"
                items={covid.heavinesses}
                label={"Тяжесть"}
                labelId={"heaviness-label"}
              />
              <SelectGrid
                name="covid.ethiological_causes_id"
                items={covid.ethiological_causes}
                label={"Этиологические причины"}
                labelId={"ethiological-causes-label"}
              />
            </HideableSection>
            <HideableSection label="Инвалидность">
              <SelectGrid
                name="disability.group_id"
                items={disability.groups}
                label={"Группа инвалидности"}
                labelId={"disability-group-label"}
              />
              <DatePickerGrid
                label={"Дата получения инвалидности"}
                name={"disability.date"}
              />
            </HideableSection>
            <HideableSection label="Диабет">
              <SelectGrid
                name="diabete.type_id"
                items={diabete.types}
                label={"Тип диабета"}
                labelId={"diabete-type-label"}
              />
              <SelectGrid
                name="diabete.treatment_id"
                items={diabete.treatments}
                label={"Тип лечения"}
                labelId={"diabete-type-label"}
              />
              <TextFieldGrid
                type="number"
                label={"Сахар перед едой"}
                {...methods.register("diabete.sugar_before_eating")}
              />
              <TextFieldGrid
                type="number"
                label={"Сахар после еды"}
                {...methods.register("diabete.sugar_after_eating")}
              />
              <SelectGrid
                name="diabete.compensation_id"
                items={diabete.compensations}
                label={"Компенсация"}
                labelId={"diabete-type-label"}
              />
              <SelectGrid
                name="diabete.him_id"
                items={diabete.hims}
                label={"ХИМ"}
                labelId={"diabete-him-label"}
              />
              <CheckboxGrid label="Генотип" name="genotype" />
            </HideableSection>
            <HideableSection label="Заболевания нервной системы">
              <SelectGrid
                name="nervous_system.polyneuropathy_id"
                items={nervous_system.polyneuropathies}
                label={"Вид полинейропатии"}
                labelId={"polyneuropathy-label"}
              />
              <TextFieldGrid
                type="number"
                label={"Мононейриты"}
                {...methods.register("nervous_system.mononeuritis")}
              />
              <SelectGrid
                name="nervous_system.complication_id"
                items={nervous_system.complications}
                label={"Осложнения"}
                labelId={"nervous-system-complications-label"}
              />
              <SelectGrid
                name="nervous_system.atherosclerosis_id"
                items={nervous_system.atherosclerosises}
                label={"Вид атеросклероза"}
                labelId={"atherosclerosis-label"}
              />
            </HideableSection>
            <HideableSection label="Заболевания сердца">
              <SelectGrid
                name="heart_issue.cardiac_ischemia_id"
                items={heart_issue.cardiac_ischemia_types}
                label={"Ишемическая болезнь сердца"}
                labelId={"cardiac-ischemia-label"}
              />
              <SelectGrid
                name="heart_issue.vessel_id"
                items={heart_issue.vessels}
                label={"Сосуды"}
                labelId={"heart-failure-vessel-label"}
              />
              <SelectGrid
                name="heart_issue.peripherial_vascular_damage_id"
                items={heart_issue.peripherial_vascular_damages}
                label={"Поражение периферических сосудов"}
                labelId={"heart-failure-peripheral-vascular-damage-label"}
              />
              <SelectGrid
                name="heart_issue.noak_id"
                items={heart_issue.noaks}
                label={"НОАК"}
                labelId={"heart-failure-noak-label"}
              />
              <SelectGrid
                name="heart_issue.disaggregant_id"
                items={heart_issue.disaggregants}
                label={"Дезагреганты"}
                labelId={"heart-failure-disaggregant-label"}
              />
              <SelectGrid
                name="heart_issue.coagulopathies_id"
                items={heart_issue.coagulopathies}
                label={"Коагулопатии"}
                labelId={"heart-failure-coagulopathies-label"}
              />
              <CheckboxGrid name="heart_issue.warfaring" label={"Варфарин"} />
              <FormGroup label="Сердечная недостаточность">
                <SelectGrid
                  name="heart_issue.heart_failure_id"
                  items={heart_issue.heart_failure.type}
                  label={"Сердечная недостаточность"}
                  labelId={"heart-failure-label"}
                />
                <SelectGrid
                  name="heart_issue.heart_failure_stage_id"
                  items={heart_issue.heart_failure.stage}
                  label={"Стадия сердечной недостаточности"}
                  labelId={"heart-failure-stage-label"}
                />
              </FormGroup>
              <FormGroup label="Атеросклероз">
                <SelectGrid
                  name="heart_issue.cerebral_atherosclerosis_id"
                  items={heart_issue.atherosclerosis.cerebrals}
                  label={"Церебральный каротдный атеросклероз"}
                  labelId={"heart-failure-cerebral-atherosclerosis-label"}
                />

                <SelectGrid
                  name="heart_issue.cvb_atherosclerosis_id"
                  items={heart_issue.atherosclerosis.cvbs}
                  label={"Церебральный Вертебро базилярный атеросклероз"}
                  labelId={"heart-failure-cvb-atherosclerosis-label"}
                />
                <SelectGrid
                  name="heart_issue.lower_limbs_atherosclerosis_id"
                  items={heart_issue.atherosclerosis.lower_limbs}
                  label={"Атеросклероз нижних конечностей"}
                  labelId={"heart-failure-lower-limbs-atherosclerosis-label"}
                />
                <SelectGrid
                  name="heart_issue.atherosclerosis_therapy_id"
                  items={heart_issue.atherosclerosis.therapies}
                  label={"Терапия атеросклероза"}
                  labelId={"heart-failure-atherosclerosis-therapy-label"}
                />
                <SelectGrid
                  name="heart_issue.atherosclerosis_complications_id"
                  items={heart_issue.atherosclerosis.complications}
                  label={"Осложнения"}
                  labelId={"heart-failure-atherosclerosis-complications-label"}
                />
                <CheckboxGrid
                  name="heart_issue.aorta_atherosclerosis"
                  label={"Атеросклероз аорты"}
                />
                <CheckboxGrid
                  label={"Кардиальный атеросклероз"}
                  name="heart_issue.cardiac_atherosclerosis"
                />
              </FormGroup>
              <FormGroup>
                <HideableSectionSelect
                  label={"Нарушения сердченого ритма"}
                  name={"heart_issue.heart_rhythm_disorder_id"}
                  items={heartRhythmDisorderItems}
                />
              </FormGroup>
              <SelectGrid
                name="heart_issue.heart_damage_id"
                items={heart_issue.additional.heart_damages}
                label={"Поражение сердца"}
                labelId={"heart-failure-heart-damage-label"}
              />
              <SelectGrid
                name="heart_issue.heart_disease_id"
                items={heart_issue.additional.heart_diseases}
                label={"Порок сердца"}
                labelId={"heart-failure-heart-disease-label"}
              />
              <TextFieldGrid
                type="number"
                label="Миокардистрофия"
                name="heart_issue.myocardial_dystrophy"
              />
              <CheckboxGrid
                name="heart_issue.myocardial_infarction_before"
                label={"Переносил инфаркт миокарда"}
              />
              <CheckboxGrid
                label={"Ревматическая болезнь сердца"}
                name="rheumatic_heart_disease"
              />
            </HideableSection>
            <HideableSection label="Артериальная гипертензия">
              <SelectGrid
                name="arterial_hypertension.stage"
                items={arterial_hypertension.stages}
                label={"Стадия"}
                labelId={"arterial-hypertension-stage-label"}
              />
              <SelectGrid
                name="arterial_hypertension.risk_before_stroke"
                items={arterial_hypertension.risks_before_stroke}
                label={"Риск до инсульта"}
                labelId={"arterial-hypertension-risk-before-stroke-label"}
              />
              <TextFieldGrid
                name="arterial_hypertension.duration_years"
                label={"Длительность в годах"}
                type="number"
              />
              <SelectGrid
                name="arterial_hypertension.target_organs_id"
                items={arterial_hypertension.target_organs}
                label={"Поражение органов мишеней"}
                labelId={"arterial-hypertension-target-organs-label"}
              />
              <SelectGrid
                name="arterial_hypertension.inheritance_id"
                items={arterial_hypertension.inheritance}
                label={"Наследственность"}
                labelId={"arterial-hypertension-inheritance-label"}
              />
              <FormGroup label="Терапия">
                <SelectGrid
                  name="arterial_hypertension.therapy_before_id"
                  items={arterial_hypertension.therapy.before}
                  label={"Терапия до"}
                  labelId={"arterial-hypertension-therapy-before-label"}
                />
                <SelectGrid
                  name="arterial_hypertension.therapy_id"
                  items={arterial_hypertension.therapy.types}
                  label={"Характер терапии"}
                  labelId={"arterial-hypertension-therapy-label"}
                />
                <TextFieldGrid
                  name="arterial_hypertension.therapy_duration_years"
                  label={"Длительность терапии в годах"}
                  type="number"
                />
                <SelectGrid
                  name="arterial_hypertension.drugs_combination_id"
                  items={arterial_hypertension.therapy.drugs_combinations}
                  label={"Комбинация ЛП"}
                  labelId={"arterial-hypertension-drugs-label"}
                />
                <SelectGrid
                  name="arterial_hypertension.emergency_help_id"
                  items={arterial_hypertension.therapy.emergency_helps}
                  label={"Использование экстренной помощи"}
                  labelId={"arterial-hypertension-emergency-help-label"}
                />
              </FormGroup>
              <FormGroup label="Давление">
                <TextFieldGrid
                  name="arterial_hypertension.systolic_blood_pressure_before"
                  label={"САД до ОНМК"}
                  type="number"
                />
                <TextFieldGrid
                  name="arterial_hypertension.systolic_blood_pressure"
                  label={"САД при ОНМК"}
                  type="number"
                />
                <TextFieldGrid
                  name="arterial_hypertension.diastolic_blood_pressure_before"
                  type="number"
                  label={"ДАД до ОНМК"}
                />
                <TextFieldGrid
                  name="arterial_hypertension.diastolic_blood_pressure"
                  label={"ДАД при ОНМК"}
                  type="number"
                />
              </FormGroup>
              <FormGroup label="Катастрофа">
                <SelectGrid
                  name="arterial_hypertension.catastrophy_relation_id"
                  items={arterial_hypertension.catastrophy.relations}
                  label={"Связь терапии с катастрофой"}
                  labelId={"arterial-hypertension-catastrophy-relation-label"}
                />
                <SelectGrid
                  name="arterial_hypertension.catastrophy_type_id"
                  items={arterial_hypertension.catastrophy.type}
                  label={"Катастрофы ГБ"}
                  labelId={"arterial-hypertension-catastrophy-label"}
                />
                <TextFieldGrid
                  name="arterial_hypertension.catastrophy_duration_years"
                  label={"Длительность катастрофы в годах"}
                  type="number"
                />
              </FormGroup>
              <HideableSection label="Патологическая АГ">
                <SelectGrid
                  name="arterial_hypertension.pathological.type_id"
                  items={arterial_hypertension.pathological.type}
                  label={"Тип патологической АГ"}
                  labelId={
                    "pathological-arterial-hypertension-inheritance-label"
                  }
                />
                <TextFieldGrid
                  name="arterial_hypertension.pathological.syncopes"
                  label={"Синкопы"}
                  type="number"
                />
                <TextFieldGrid
                  name="arterial_hypertension.pathological.syncopes_periodicity"
                  label={"Периодичность синкопов"}
                  type="number"
                />
                <SelectGrid
                  name="arterial_hypertension.pathological.therapy_id"
                  items={arterial_hypertension.pathological.therapies}
                  label={"Терапия патологической АГ"}
                  labelId={"pathological-arterial-hypertension-therapy-label"}
                />
              </HideableSection>
            </HideableSection>
          </Grid>
        </Grid>
        <StepperPagination text={"Далее"} />
      </form>
    </FormProvider>
  );
};
