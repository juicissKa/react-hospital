import { Grid } from "@mui/material";
import React from "react";
import { HideableSection } from "../../../../../features/HideableSection";
import { SelectGrid } from "../../../../../shared/ui/SelectGrid";
import { DatePickerGrid } from "../../../../../shared/ui/DatePickerGrid";
import { FormProvider, useForm } from "react-hook-form";
import { TextFieldGrid } from "../../../../../shared/ui/TextFieldGrid";
import { CheckboxGrid } from "../../../../../shared/ui/CheckboxGrid";
import { HideableSectionSelect } from "../../../../../features/HideableSectionSelect";
import { Fibrillation } from "./HideableComponents/Fibrillation";
import { HideableSectionSelectItem } from "../../../../../features/HideableSectionSelect/ui/HideableSectionSelect";
import { Extrasystole } from "./HideableComponents/Extrasystole";
import { FormGroup } from "../../../../../shared/ui/FormGroup";
import { VisitFormData } from "../../../../../shared/api/visit/model/model";
import { StepperPagination } from "../StepperPagination";
import { FilledFormData } from "../CreateArrivalFormStepper";

export type IllnessesStepData = {
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
    him: number;
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
    heart_failure_stage: number;
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
    warfaring: boolean;
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
    emergency_help_id: number;
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
  setFilledFormData: React.Dispatch<React.SetStateAction<FilledFormData>>;
};

const defaultValues = {
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
    warfaring: false,
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
    emergency_help_id: 1,
    systolic_blood_pressure_before: 0,
    systolic_blood_pressure: 0,
    diastolic_blood_pressure_before: 0,
    diastolic_blood_pressure: 0,
    catastrophy_relation_id: 1,
    catastrophy_type_id: 1,
    catastrophy_duration_years: 1,
  },
  arterial_hypertension_pathological: {
    type_id: 1,
    syncopes: 0,
    syncopes_periodicity: 0,
    therapy_id: 1,
  },
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
  setFilledFormData,
}) => {
  const methods = useForm<IllnessesStepData>();
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

  const onSubmit = (data: IllnessesStepData) => {
    console.log(data);
    setFilledFormData((prev) => ({ ...prev, illnesses: data }));
    setActiveStep((prev) => prev + 1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={12}>
            <HideableSection
              label="Ковид"
              name="covid"
              defaultValues={defaultValues.covid}
              render={() => (
                <>
                  <SelectGrid
                    {...methods.register("covid.type_id")}
                    items={covid.types}
                    label={"Тип ковида"}
                    labelId={"covid-label"}
                  />
                  <SelectGrid
                    {...methods.register("covid.complications_id")}
                    items={covid.complications}
                    label={"Осложнения"}
                    labelId={"complications-label"}
                  />
                  <SelectGrid
                    {...methods.register("covid.heaviness_id")}
                    items={covid.heavinesses}
                    label={"Тяжесть"}
                    labelId={"heaviness-label"}
                  />
                  <SelectGrid
                    {...methods.register("covid.ethiological_causes_id")}
                    items={covid.ethiological_causes}
                    label={"Этиологические причины"}
                    labelId={"ethiological-causes-label"}
                  />
                </>
              )}
            />
            <HideableSection
              label="Инвалидность"
              name="disability"
              defaultValues={defaultValues.disability}
              render={() => (
                <>
                  <SelectGrid
                    {...methods.register("disability.group_id")}
                    items={disability.groups}
                    label={"Группа инвалидности"}
                    labelId={"disability-group-label"}
                  />
                  <DatePickerGrid
                    label={"Дата получения инвалидности"}
                    name={"disability.date"}
                  />
                </>
              )}
            />
            <HideableSection
              label="Диабет"
              name="diabete"
              defaultValues={defaultValues.diabete}
              render={() => (
                <>
                  <SelectGrid
                    {...methods.register("diabete.type_id")}
                    items={diabete.types}
                    label={"Тип диабета"}
                    labelId={"diabete-type-label"}
                  />
                  <SelectGrid
                    {...methods.register("diabete.treatment_id")}
                    items={diabete.treatments}
                    label={"Тип лечения"}
                    labelId={"diabete-type-label"}
                  />
                  <TextFieldGrid
                    type="number"
                    label={"Сахар перед едой"}
                    name="diabete.sugar_before_eating"
                  />
                  <TextFieldGrid
                    type="number"
                    label={"Сахар после еды"}
                    name="diabete.sugar_after_eating"
                  />
                  <SelectGrid
                    {...methods.register("diabete.compensation_id")}
                    items={diabete.compensations}
                    label={"Компенсация"}
                    labelId={"diabete-type-label"}
                  />
                  <SelectGrid
                    {...methods.register("diabete.him")}
                    label={"ХИМ"}
                    labelId={"diabete-him-label"}
                    items={[
                      { id: 1, value: "1 стадия" },
                      { id: 2, value: "2 стадия" },
                      { id: 3, value: "3 стадия" },
                    ]}
                  />
                  <CheckboxGrid label="Генотип" name="diabete.genotype" />
                </>
              )}
            />

            <HideableSection
              label="Заболевания нервной системы"
              name="nervous_system"
              defaultValues={defaultValues.nervous_system}
              render={() => (
                <>
                  <SelectGrid
                    {...methods.register("nervous_system.polyneuropathy_id")}
                    items={nervous_system.polyneuropathies}
                    label={"Вид полинейропатии"}
                    labelId={"polyneuropathy-label"}
                  />
                  <TextFieldGrid
                    type="number"
                    label={"Мононейриты"}
                    name="nervous_system.mononeuritis"
                  />
                  <SelectGrid
                    {...methods.register("nervous_system.complication_id")}
                    items={nervous_system.complications}
                    label={"Осложнения"}
                    labelId={"nervous-system-complications-label"}
                  />
                  <SelectGrid
                    {...methods.register("nervous_system.atherosclerosis_id")}
                    items={nervous_system.atherosclerosises}
                    label={"Вид атеросклероза"}
                    labelId={"atherosclerosis-label"}
                  />
                </>
              )}
            />
            <HideableSection
              label="Заболевания сердца"
              name="heart_issue"
              defaultValues={defaultValues.heart_issue}
              render={() => (
                <>
                  <SelectGrid
                    {...methods.register("heart_issue.cardiac_ischemia_id")}
                    items={heart_issue.cardiac_ischemia_types}
                    label={"Ишемическая болезнь сердца"}
                    labelId={"cardiac-ischemia-label"}
                  />
                  <SelectGrid
                    {...methods.register("heart_issue.vessel_id")}
                    items={heart_issue.vessels}
                    label={"Сосуды"}
                    labelId={"heart-failure-vessel-label"}
                  />
                  <SelectGrid
                    {...methods.register(
                      "heart_issue.peripherial_vascular_damage_id"
                    )}
                    items={heart_issue.peripherial_vascular_damages}
                    label={"Поражение периферических сосудов"}
                    labelId={"heart-failure-peripheral-vascular-damage-label"}
                  />
                  <SelectGrid
                    {...methods.register("heart_issue.noak_id")}
                    items={heart_issue.noaks}
                    label={"НОАК"}
                    labelId={"heart-failure-noak-label"}
                  />
                  <SelectGrid
                    {...methods.register("heart_issue.disaggregant_id")}
                    items={heart_issue.disaggregants}
                    label={"Дезагреганты"}
                    labelId={"heart-failure-disaggregant-label"}
                  />
                  <SelectGrid
                    {...methods.register("heart_issue.coagulopathies_id")}
                    items={heart_issue.coagulopathies}
                    label={"Коагулопатии"}
                    labelId={"heart-failure-coagulopathies-label"}
                  />
                  <CheckboxGrid
                    name="heart_issue.warfaring"
                    label={"Варфарин"}
                  />
                  <FormGroup label="Сердечная недостаточность">
                    <SelectGrid
                      {...methods.register("heart_issue.heart_failure_id")}
                      items={heart_issue.heart_failure.type}
                      label={"Сердечная недостаточность"}
                      labelId={"heart-failure-label"}
                    />
                    <SelectGrid
                      {...methods.register("heart_issue.heart_failure_stage")}
                      items={[
                        { id: 1, value: "I стадия" },
                        { id: 2, value: "II стадия" },
                        { id: 3, value: "III стадия" },
                        { id: 3, value: "IV стадия" },
                      ]}
                      label={"Стадия сердечной недостаточности"}
                      labelId={"heart-failure-stage-label"}
                    />
                  </FormGroup>
                  <FormGroup label="Атеросклероз">
                    <SelectGrid
                      {...methods.register(
                        "heart_issue.cerebral_atherosclerosis_id"
                      )}
                      items={heart_issue.atherosclerosis.cerebrals}
                      label={"Церебральный каротдный атеросклероз"}
                      labelId={"heart-failure-cerebral-atherosclerosis-label"}
                    />

                    <SelectGrid
                      {...methods.register(
                        "heart_issue.cvb_atherosclerosis_id"
                      )}
                      items={heart_issue.atherosclerosis.cvbs}
                      label={"Церебральный Вертебро базилярный атеросклероз"}
                      labelId={"heart-failure-cvb-atherosclerosis-label"}
                    />
                    <SelectGrid
                      {...methods.register(
                        "heart_issue.lower_limbs_atherosclerosis_id"
                      )}
                      items={heart_issue.atherosclerosis.lower_limbs}
                      label={"Атеросклероз нижних конечностей"}
                      labelId={
                        "heart-failure-lower-limbs-atherosclerosis-label"
                      }
                    />
                    <SelectGrid
                      {...methods.register(
                        "heart_issue.atherosclerosis_therapy_id"
                      )}
                      items={heart_issue.atherosclerosis.therapies}
                      label={"Терапия атеросклероза"}
                      labelId={"heart-failure-atherosclerosis-therapy-label"}
                    />
                    <SelectGrid
                      {...methods.register(
                        "heart_issue.atherosclerosis_complications_id"
                      )}
                      items={heart_issue.atherosclerosis.complications}
                      label={"Осложнения"}
                      labelId={
                        "heart-failure-atherosclerosis-complications-label"
                      }
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
                    {...methods.register("heart_issue.heart_damage_id")}
                    items={heart_issue.additional.heart_damages}
                    label={"Поражение сердца"}
                    labelId={"heart-failure-heart-damage-label"}
                  />
                  <SelectGrid
                    {...methods.register("heart_issue.heart_disease_id")}
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
                    name="heart_issue.rheumatic_heart_disease"
                  />
                </>
              )}
            />

            <HideableSection
              label="Артериальная гипертензия"
              name="arterial_hypertension"
              defaultValues={defaultValues.arterial_hypertension}
              render={() => (
                <>
                  <SelectGrid
                    {...methods.register("arterial_hypertension.stage")}
                    items={[
                      { id: 1, value: "1" },
                      { id: 2, value: "2" },
                      { id: 3, value: "3" },
                      { id: 4, value: "4" },
                    ]}
                    label={"Стадия"}
                    labelId={"arterial-hypertension-stage-label"}
                  />
                  <TextFieldGrid
                    name="arterial_hypertension.risk_before_stroke"
                    label={"Риск перед инсультом"}
                    type="number"
                  />
                  <TextFieldGrid
                    name="arterial_hypertension.duration_years"
                    label={"Длительность в годах"}
                    type="number"
                  />
                  <SelectGrid
                    {...methods.register(
                      "arterial_hypertension.target_organs_id"
                    )}
                    items={arterial_hypertension.target_organs}
                    label={"Поражение органов мишеней"}
                    labelId={"arterial-hypertension-target-organs-label"}
                  />
                  <SelectGrid
                    {...methods.register(
                      "arterial_hypertension.inheritance_id"
                    )}
                    items={arterial_hypertension.inheritance}
                    label={"Наследственность"}
                    labelId={"arterial-hypertension-inheritance-label"}
                  />
                  <FormGroup label="Терапия">
                    <TextFieldGrid
                      name="arterial_hypertension.therapy_duration_years"
                      label={"Длительность терапии в годах"}
                      type="number"
                    />
                    <SelectGrid
                      {...methods.register(
                        "arterial_hypertension.drugs_combination_id"
                      )}
                      items={arterial_hypertension.therapy.drugs_combinations}
                      label={"Комбинация ЛП"}
                      labelId={"arterial-hypertension-drugs-label"}
                    />
                    <SelectGrid
                      {...methods.register(
                        "arterial_hypertension.emergency_help_id"
                      )}
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
                      {...methods.register(
                        "arterial_hypertension.catastrophy_relation_id"
                      )}
                      items={arterial_hypertension.catastrophy.relations}
                      label={"Связь терапии с катастрофой"}
                      labelId={
                        "arterial-hypertension-catastrophy-relation-label"
                      }
                    />
                    <SelectGrid
                      {...methods.register(
                        "arterial_hypertension.catastrophy_type_id"
                      )}
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
                  <HideableSection
                    label="Патологическая АГ"
                    name="arterial_hypertension.pathological"
                    defaultValues={
                      defaultValues.arterial_hypertension_pathological
                    }
                    render={() => (
                      <>
                        <SelectGrid
                          {...methods.register(
                            "arterial_hypertension.pathological.type_id"
                          )}
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
                          {...methods.register(
                            "arterial_hypertension.pathological.therapy_id"
                          )}
                          items={arterial_hypertension.pathological.therapies}
                          label={"Терапия патологической АГ"}
                          labelId={
                            "pathological-arterial-hypertension-therapy-label"
                          }
                        />
                      </>
                    )}
                  />
                </>
              )}
            />
          </Grid>
        </Grid>
        <StepperPagination text={"Далее"} />
      </form>
    </FormProvider>
  );
};